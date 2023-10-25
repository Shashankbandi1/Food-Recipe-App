
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import { Contact } from './components/Contact';

function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<div> <Outlet /> </div>}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes> 
</BrowserRouter>
  
}

export default App;
