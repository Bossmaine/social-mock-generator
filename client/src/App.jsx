import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMock from './pages/CreateMock';
import Templates from './pages/Templates';
import Preview from './pages/Preview';
import './index.css'; // This now imports Tailwind CSS

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateMock />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;