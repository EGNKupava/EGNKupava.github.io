import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CustomButtonPage } from './pages/custom-button-page';

import './App.css';

const Navigation = () => (
  <div>
    <h2>Main Page</h2>
    <Link to="/custom-button"> Custom button page</Link>
  </div>
)

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Navigation />} />
       <Route path="/custom-button" element={<CustomButtonPage />} />
     </Routes>
    </div>
  );
}

export default App;
