import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import HeaderOfHome from "./headerH";

import "../CssOfComponents/Home.css";

function Home() {
  return (
    <div>
    <div className="Justforbg">
      <Navbar />
      
      <HeaderOfHome />
      <div id="TextOfpar">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          eaque. Delectus, totam recusandae nam dicta qui repellat reprehenderit
          alias nobis repudiandae possimus quod nesciunt, amet, quam consequatur
          soluta minus! In. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vitae esse officia repellendus necessitatibus pariatur
          cupiditate eos iste natus asperiores iure facere consectetur aperiam
          sapiente corporis, voluptas aut saepe, dolore unde?
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          exercitationem consectetur non nemo soluta! Magni laboriosam repellat
          accusamus laudantium, rerum porro veniam exercitationem iste molestias
          iusto voluptas sit harum doloremque?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos, consequatur dolores! Tempora,
          minus ea vel quis sunt nemo minima, illo maiores perferendis quod
          eveniet dolores voluptatum aliquid in commodi! Veritatis!
        </p>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
