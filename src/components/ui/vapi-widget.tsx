import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, MicOff, Phone } from 'lucide-react';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
}

const VapiWidget: React.FC<VapiWidgetProps> = ({ 
  apiKey, 
  assistantId, 
  config = {} 
}) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<Array<{role: string, text: string}>>([]);

  useEffect(() => {
    try {
      const vapiInstance = new Vapi(apiKey);
      setVapi(vapiInstance);

      // Event listeners
      vapiInstance.on('call-start', () => {
        console.log('Call started');
        setIsConnected(true);
        setIsLoading(false);
        setError(null);
      });

      vapiInstance.on('call-end', () => {
        console.log('Call ended');
        setIsConnected(false);
        setIsSpeaking(false);
        setIsLoading(false);
      });

      vapiInstance.on('speech-start', () => {
        console.log('Assistant started speaking');
        setIsSpeaking(true);
      });

      vapiInstance.on('speech-end', () => {
        console.log('Assistant stopped speaking');
        setIsSpeaking(false);
      });

      vapiInstance.on('message', (message) => {
        console.log('Received message:', message);
        if (message.type === 'transcript') {
          setTranscript(prev => [...prev, {
            role: message.role,
            text: message.transcript
          }]);
        }
      });

      vapiInstance.on('error', (error) => {
        console.error('Vapi error:', error);
        setError(error.message || 'An error occurred');
        setIsLoading(false);
        setIsConnected(false);
      });

      return () => {
        vapiInstance?.stop();
      };
    } catch (err) {
      console.error('Failed to initialize Vapi:', err);
      setError('Failed to initialize voice assistant');
    }
  }, [apiKey]);

  const startCall = async () => {
    if (!vapi) {
      setError('Voice assistant not initialized');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // Request microphone permission first
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop()); // Stop the stream as VAPI will handle it
      
      console.log('Starting call with assistant:', assistantId);
      await vapi.start(assistantId);
    } catch (err: any) {
      console.error('Failed to start call:', err);
      setError(err.message || 'Failed to start voice call');
      setIsLoading(false);
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {error && (
        <div className="mb-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm max-w-80">
          {error}
        </div>
      )}
      
      {!isConnected ? (
        <button
          onClick={startCall}
          disabled={isLoading}
          className={`group bg-white text-black hover:bg-gray-100 border-none rounded-full px-6 py-4 text-base font-semibold cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 flex items-center gap-3 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
              Connecting...
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              Talk to AI Assistant
            </>
          )}
        </button>
      ) : (
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 w-80 shadow-2xl border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className="font-semibold text-gray-800">
                {isSpeaking ? 'Assistant Speaking...' : 'Listening...'}
              </span>
            </div>
            <button
              onClick={endCall}
              className="bg-red-500 hover:bg-red-600 text-white border-none rounded-lg px-3 py-2 text-sm cursor-pointer flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              End Call
            </button>
          </div>
          
          <div className="max-h-48 overflow-y-auto mb-3 p-3 bg-gray-50 rounded-xl">
            {transcript.length === 0 ? (
              <p className="text-gray-600 text-sm m-0">
                Conversation will appear here...
              </p>
            ) : (
              transcript.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <span className={`inline-block px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-700 text-white'
                  }`}>
                    {msg.text}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VapiWidget;