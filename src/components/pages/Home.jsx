import React, { useEffect, useRef } from "react";
import HomeSection1 from "../sections/home/HomeSection1";
import HomeSection2 from "../sections/home/HomeSection2";
import HomeSection3 from "../sections/home/HomeSection3";
import HomeSection4 from "../sections/home/HomeSection4";
import { motion } from "framer-motion";
import HomeSection5 from "../sections/home/HomeSection5";
import HomeSection6 from "../sections/home/HomeSection6";
function Home({ containerRef }) {
  return (
    <div className="row m-0 bg-black home ">
      <div className="col-12 p-0 ">
        <div className="containerz mx-auto h-100">
          <HomeSection1 />
        </div>
      </div>{" "}
      <div className="col-12 p-0 ">
        <HomeSection2 />
      </div>{" "}
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
      </div>{" "}
      <div className="col-12 p-0 ">
        <HomeSection6 />
      </div>
    </div>
  );
}

export default Home;
