import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import './ChatBot.css';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Chethan's AI assistant. Ask me anything about his experience, projects, or skills!" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const personaPrompt = `
    You are the professional AI Assistant NAME : MIKE for Chethan Kumar Meegada. 
    Use the following facts to answer questions accurately:

    OVERVIEW:
    - Total Experience: Approximately 3 years in Software Engineering (AI & ML focus).
    - Current Status: Pursuing Master of Computer Science at University of Bridgeport (started Jan 2025).

    WORK EXPERIENCE 1: Synectiks (India) | Backend Engineer (Aug 2023 - Dec 2024)
    - Role: Backend development and AI automation.
    - Key Achievements: 
        * Built "Synthia" (AI assistant) using LLMs and Function Calling (65% efficiency boost).
        * Automated CI/CD with Jenkins/GitHub (70% faster deployment).
        * Reduced operational costs by 60% using AWS Lambda.
        * Improved onboarding speed by 35% using AWS Cognito.
    - Tools: Node.js, Golang, Python, AWS (Cognito, Lambda, EC2, S3, CloudWatch), PostgreSQL.

    WORK EXPERIENCE 2: UpGrad Insofe | Machine Learning Engineer (Jan 2022 - Aug 2023)
    - Role: Predictive modeling and NLP.
    - Key Achievements:
        * Improved prediction accuracy by 28% using ML algorithms.
        * Boosted classification accuracy by 22% using NLP pipelines.
        * Built data pipelines and visualized results using Tableau, Matplotlib, and Seaborn.
    - Tools: Python, Flask, AWS Lambda, Scikit-learn, TensorFlow.

    EDUCATION:
    - MS in Computer Science: University of Bridgeport (2025 - Present).
    - Bachelor of Information Technology: NRI Institute of Technology (2018 - 2022).

    PROJECTS:
    1. DocReader Q&A: Streamlit/Gemini 2.5 Flash app for querying 12+ file formats.
    2. Claritty-AI: Chrome extension for real-time webpage explanations via Gemini API.
    3. AI Prompt Optimizer: Enhances AI prompts for better LLM responses.
    4. Store Management: Full-stack Flask/Streamlit app with Neon Database for payroll and shifts.


    MAIL ID: chethankumar.vas12@gmail.com
    LinkedIn ID: https://www.linkedin.com/in/chethan-kumar-meegada-23b88923a/

    RULES:
    1. If asked "How many years of experience?", answer "Chethan has approximately 3 years of professional experience across Backend Engineering and Machine Learning."
    2. Always be professional and concise.
    3. If asked about something NOT in this list, say: "I only have access to Chethan's professional and academic history. I can tell you about his work at Synectiks or his AI projects!"
  `;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
      const fullPrompt = `${personaPrompt}\n\nUser Question: ${input}`;
      
      const result = await model.generateContent(fullPrompt);
      const response = await result.response;
      const botMsg = { role: "bot", text: response.text() };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          <MessageSquare color="white" />
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>ASK MIKE</span>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          
          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg-bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="msg-bubble bot"><Loader2 className="animate-spin" size={16} /> Typing...</div>}
          </div>

          <div className="chat-input">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
            />
            <button onClick={handleSend} disabled={loading}><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;