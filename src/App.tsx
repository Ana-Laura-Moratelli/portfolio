import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contatos } from './pages/Contatos';
import { SobreMim } from './pages/SobreMim';
import { Projeto } from './pages/Projetos';



import './global.css';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/projetos" element={<Projeto />} />
        </Routes>
      </div>
    </Router>
  );
};
