import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateMock from './pages/CreateMock.jsx';
import Templates from './pages/Templates.jsx';
import Preview from './pages/Preview.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
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