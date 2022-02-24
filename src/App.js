import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Projects from './components/projects';
import Houses from './components/houses';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
