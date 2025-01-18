import React from "react";
import '../CssOfComponents/navbar.css';

function Navbar() {


    return (
      <>
        <nav id="navber">
            <a className="contt" href="/">Home</a>
            <a className="contt" href="/Menu">Menu</a>
            <a className="contt" href="/About">About</a>
            <a className="contt" href="/Contact">contact</a>
        </nav>
      </>
    )
  }
  
export default Navbar
  