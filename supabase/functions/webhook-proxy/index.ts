import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phoneNumber } = await req.json();

    if (!name || !phoneNumber) {
      throw new Error('Name and phone number are required');
    }

    console.log('Received data:', { name, phoneNumber });

    // Forward the data to your n8n webhook
    const webhookResponse = await fetch(
      'https://simplifygenai.app.n8n.cloud/webhook/37d2ffa1-abc6-4066-bba5-6303cfba924b',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          timestamp: new Date().toISOString(),
          source: 'voice-ai-demo-form'
        }),
      }
    );

    console.log('Webhook response status:', webhookResponse.status);

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('Webhook error:', errorText);
      throw new Error(`Webhook call failed: ${webhookResponse.status}`);
    }

    const responseData = await webhookResponse.text();
    console.log('Webhook response:', responseData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Demo call scheduled successfully' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in webhook-proxy function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});