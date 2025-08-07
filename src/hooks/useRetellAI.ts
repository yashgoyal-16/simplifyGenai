import { useState, useCallback, useRef, useEffect } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { supabase } from '@/integrations/supabase/client';

export type CallState = 'idle' | 'connecting' | 'active' | 'ending' | 'error';

export const useRetellAI = (agentId: string) => {
  const [callState, setCallState] = useState<CallState>('idle');
  const [error, setError] = useState<string | null>(null);
  const retellWebClientRef = useRef<RetellWebClient | null>(null);

  const startCall = useCallback(async () => {
    try {
      setCallState('connecting');
      setError(null);

      console.log('Starting Retell call for agent:', agentId);

      // Create web call through Supabase Edge Function
      const { data, error: supabaseError } = await supabase.functions.invoke('create-retell-call', {
        body: { agentId }
      });

      if (supabaseError) {
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      if (!data?.call_id || !data?.access_token) {
        throw new Error('Invalid response from create-retell-call');
      }

      console.log('Web call created:', data);

      // Initialize RetellWebClient
      retellWebClientRef.current = new RetellWebClient();

      // Set up event listeners
      retellWebClientRef.current.on('call_started', () => {
        console.log('Call started');
        setCallState('active');
      });

      retellWebClientRef.current.on('call_ended', () => {
        console.log('Call ended');
        setCallState('idle');
      });

      retellWebClientRef.current.on('error', (error) => {
        console.error('Retell call error:', error);
        setError(error.message || 'An error occurred during the call');
        setCallState('error');
      });

      // Start the call
      await retellWebClientRef.current.startCall({
        accessToken: data.access_token,
      });

    } catch (err) {
      console.error('Failed to start call:', err);
      setError(err instanceof Error ? err.message : 'Failed to start call');
      setCallState('error');
    }
  }, [agentId]);

  const endCall = useCallback(() => {
    if (retellWebClientRef.current) {
      setCallState('ending');
      try {
        retellWebClientRef.current.stopCall();
        setCallState('idle');
      } catch (err) {
        console.error('Failed to end call:', err);
        setError('Failed to end call');
        setCallState('error');
      }
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (retellWebClientRef.current) {
        try {
          retellWebClientRef.current.stopCall();
        } catch (error) {
          console.error('Error stopping call on cleanup:', error);
        }
      }
    };
  }, []);

  return {
    callState,
    error,
    startCall,
    endCall,
    isActive: callState === 'active',
    isConnecting: callState === 'connecting',
  };
};