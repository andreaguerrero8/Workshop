<<<<<<< HEAD
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

=======
import Cards from '../components/Cards';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
     <Cards/>
    </div>
>>>>>>> 9362f9cd8f0e5a3a644f0245031f25c3ab3e078b
  );
}

export default App;
