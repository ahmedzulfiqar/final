import React, { useEffect, useRef } from "react";
import "./App.css";
import "./components/css/Root.css";
import "./components/css/home.css";
import RouterFile from "./components/routes/RouterFile";
import Navbar from "./components/sections/navigation/Navbar";
import AnimatedCursor from "react-animated-cursor";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  const { scroll } = useLocomotiveScroll(); // Call the hook directly in the component body

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".jesd",
        scroller: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    tl.fromTo(".jesd", { opacity: 0.1 }, { opacity: 1, duration: 2 });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: containerRef.current.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();
    }

    return () => {
      if (scroll) {
        scroll.off("scroll", ScrollTrigger.update);
      }
    };
  }, [scroll]);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.01,
          smartphone: { smooth: true },
        }}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <div className="App">
            <div className="row m-0">
              <div className="col-12 p-0">
                <Navbar />
                <p className="mt-5 pt-5 vh-100  display-1 fw-bolder fontnormal text-danger">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dicta pariatur, ipsa, cupiditate odio illo maxime
                  sapiente quo necessitatibus voluptates eaque laboriosam, eius
                  quas. Aliquid hic distinctio eligendi similique accusamus?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dicta pariatur, ipsa, cupiditate odio illo maxime
                  sapiente quo necessitatibus voluptates eaque laboriosam, eius
                  quas. Aliquid hic distinctio eligendi similique accusamus?
                </p>
                <p className="mt-5 pt-5 vh-100 jesd display-1 fw-bolder fontnormal text-danger">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dicta pariatur, ipsa, cupiditate odio illo maxime
                  sapiente quo necessitatibus voluptates eaque laboriosam, eius
                  quas. Aliquid hic distinctio eligendi similique accusamus?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dicta pariatur, ipsa, cupiditate odio illo maxime
                  sapiente quo necessitatibus voluptates eaque laboriosam, eius
                  quas. Aliquid hic distinctio eligendi similique accusamus?
                </p>
                <p className="mt-5 pt-5 vh-100  display-1 fw-bolder fontnormal text-danger">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dicta pariatur, ipsa, cupiditate odio illo maxime
                  sapiente quo necessitatibus voluptates eaque laboriosam, eius
                  quas. Aliquid hic distinctio eligendi similique accusamus?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dicta pariatur, ipsa, cupiditate odio illo maxime
                  sapiente quo necessitatibus voluptates eaque laboriosam, eius
                  quas. Aliquid hic distinctio eligendi similique accusamus?
                </p>
              </div>
            </div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;

{
  /* <AnimatedCursor
        outerStyle={{
          backgroundColor: "var(--cursor-color)",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color2)",
        }}
        innerSize={0}
        outerSize={33}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        trailingSpeed={1}
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
      />*/
}
