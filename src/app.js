import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Habits from './pages/Habits';
import Profile from './pages/Profile';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;