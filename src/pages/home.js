import React from 'react';
import ChatInterface from '../components/Chat/ChatInterface';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Welcome Message */}
      <div className="welcome-message">
        <h1>Welcome to HabitFlow</h1>
        <p>Your AI-powered productivity assistant for time management, task prioritization, and habit building.</p>
      </div>

      {/* Chat Interface */}
      <div className="chat-container">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Home;