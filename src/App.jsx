import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/home'
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
