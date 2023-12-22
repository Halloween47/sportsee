import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.css';

import Profils from './pages/profils';
import Dashboard from './pages/dashboard';


function App() {
  return (
     <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Profils />} />
                <Route path="/dashboard/:idUser" element={<Dashboard />} />
            </Routes>
        </Router>    
    </div> 
  )
}

export default App;
