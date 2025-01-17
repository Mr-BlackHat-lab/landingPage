import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import HeaderOfHome from "./headerH";

import '../CssOfComponents/Home.css'

function Home() {


    return (
        <div className="Justforbg">
        <Navbar/><br/>
        <HeaderOfHome/>        
        <div>body</div>
        <Footer/>
        </div>
        
        
    )
  }
  
  export default Home
  