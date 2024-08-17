import React, { useEffect, useRef } from "react";
import "./App.css";
import "./components/css/Root.css";
import "./components/css/home.css";
import RouterFile from "./components/routes/RouterFile";
import Navbar from "./components/sections/navigation/Navbar";
import AnimatedCursor from "react-animated-cursor";
import "lenis/dist/lenis.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, useScroll } from "framer-motion";
// gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <AnimatedCursor
        outerStyle={{
          backgroundColor: "var(--cursor-color)",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color2)",
        }}
        innerSize={0}
        outerSize={23}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        trailingSpeed={5}
        clickables={[
          {
            target: ".mycursor",
            options: {
              outerStyle: {
                backgroundColor: "var(--cursor-color)",
                mixBlendMode: "exclusion",
              },
              innerStyle: {
                backgroundColor: "var(--cursor-color2)",
              },
              innerSize: 0,
              outerSize: 34, // Increased size for more visibility
              innerScale: 2, // Keep scale at 1
              outerScale: 4, // Increased scale for a more noticeable effect
              outerAlpha: 20,
              trailingSpeed: 1,
            },
          },
        ]}
      />
      <ReactLenis
        root
        options={{ lerp: 0.03, duration: 1.5, smoothTouch: true }}
      >
        <div className="App">
          <div className="row m-0">
            <div className="col-12 p-0">
              <Navbar />
              <RouterFile />
            </div>
          </div>
        </div>{" "}
      </ReactLenis>
      <div className="fixed-top newgradient vw-100 m-0 p-0 py-5">
        <div className="opacity-0 py-3">a</div>
      </div>
      <div className="fixed-bottom  newgradient2 vw-100 m-0 p-0 py-2">
        <div className="opacity-0 py-2">a</div>
      </div>
    </>
  );
}

export default App;

{
  /* */
}
