import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Projects from './components/projects';
import Houses from './components/houses';
import Home from './components/home';
import Discover from './components/Discover';
import Chats from './components/Chats';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/houses/:query" element={<Houses />} />
          <Route path="/projects/:query" element={<Projects />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
