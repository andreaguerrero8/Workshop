import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Detalle from '../components/Detalle';
import FilterIzq from '../components/FilterIzq';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilterIzq />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
