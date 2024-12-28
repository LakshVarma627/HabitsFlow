import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      // Add user message to chat
      setChat([...chat, { text: message, sender: 'user' }]);
      setMessage('');

      // Simulate AI response
      setTimeout(() => {
        setChat((prevChat) => [
          ...prevChat,
          { text: 'How can I assist you today?', sender: 'ai' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-interface">
      {/* Chat Messages */}
      <div className="chat-messages">
        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;