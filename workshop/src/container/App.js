import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FilterIzq from '../components/FilterIzq';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilterIzq />} />
        {/* <Route path="/" element={<Lenguajes />} />
        <Route path="/" element={<Formulario />} />
        <Route path="/" element={<Estadisticas />} />
        <Route path="/" element={<Suscribirse />} />
        <Route path="/" element={<Login/>} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
