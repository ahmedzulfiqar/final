import React, { useEffect, useRef } from "react";
import HomeSection1 from "../sections/home/HomeSection1";
import HomeSection2 from "../sections/home/HomeSection2";
import HomeSection3 from "../sections/home/HomeSection3";
import HomeSection4 from "../sections/home/HomeSection4";
import { motion } from "framer-motion";
import HomeSection5 from "../sections/home/HomeSection5";
import HomeSection6 from "../sections/home/HomeSection6";
import HomeSection7 from "../sections/home/HomeSection7";
import HomeSection8 from "../sections/home/HomeSection8";
import HomeSection9 from "../sections/home/HomeSection9";
import HomeSection10 from "../sections/home/HomeSection10";
import HomeSection11 from "../sections/home/HomeSection11";
import { translate2 } from "../sections/navigation/Anim";
import Footer from "../sections/navigation/Footer";
function Home({ containerRef }) {
  return (
    <div className="row m-0 bg-black home ">
      <div className="col-12 p-0  position-relative z-3">
        <div className="containerz mx-auto h-100">
          <HomeSection1 />
        </div>
      </div>{" "}
      <div className="col-12 p-0 ">
        <HomeSection2 />
      </div>
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection3 />
        </div>
      </div>
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection4 containerRef={containerRef} />
        </div>
      </div>
      <div className="col-12 p-0 ">
        <HomeSection5 />
      </div>
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          {" "}
          <HomeSection6 />
        </div>
      </div>{" "}
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection7 />
        </div>
      </div>{" "}
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection8 />
        </div>
      </div>
      <div className="col-12 p-0 ">
        <HomeSection9 />
      </div>
      <div className="col-12 p-0 ">
      </div>
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection10 />
        </div>
      </div>
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection11 containerRef={containerRef} />
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default Home;
