import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, Send, Sparkles, User, Loader2 } from 'lucide-react';

interface AITravelConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  openEnquiryModal: (type?: string, defaultDest?: string) => void;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export const AITravelConciergeModal: React.FC<AITravelConciergeModalProps> = ({
  isOpen,
  onClose,
  openEnquiryModal
}) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: "Hello! I am Aria, your AI Luxury Travel Concierge at WanderLuxe. Are you dreaming of a tropical island escape in Bali, a fairytale Swiss mountain trip, or a desert safari in Dubai? Tell me your ideas and I will recommend the perfect itinerary!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: messages
        })
      });

      const data = await res.json();
      const botReply: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || "I am glad to assist with your travel planning! Would you like me to connect you with a human travel advisor?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      console.error('AI Concierge error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md flex justify-end animate-fadeIn">
      <div className="bg-slate-900 text-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between border-l border-slate-800">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold font-serif text-white text-base">Aria AI Concierge</h3>
                <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-purple-500/30">
                  Gemini Powered
                </span>
              </div>
              <p className="text-slate-400 text-xs">24/7 Smart Travel Designer</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-slate-900/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 text-xs ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-3.5 space-y-1 shadow-md leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-[10px] opacity-60 block text-right">{msg.time}</span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-md">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-purple-400 bg-purple-950/40 p-3 rounded-2xl border border-purple-800/40 max-w-[70%]">
              <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
              <span>Aria is crafting personalized recommendations...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-2">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Aria about packages, visas, or customized itineraries..."
              className="flex-1 bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-purple-500 placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:opacity-90 transition disabled:opacity-50 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span>Need human agent call?</span>
            <button
              onClick={() => { onClose(); openEnquiryModal('General'); }}
              className="text-teal-400 underline font-semibold hover:text-teal-300"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
