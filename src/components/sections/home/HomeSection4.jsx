import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function HomeSection4() {
  {
    /*  const { scroll } = useContext(LocomotiveScrollContext);
  const scrollY = useMotionValue(0);
  const rotate = useTransform(scrollY, [0, 1000], ["0deg", "180deg"]);
  useEffect(() => {
    if (scroll) {
      const onScroll = (instance) => {
        scrollY.set(instance.scroll.y);
      };

      scroll.on("scroll", onScroll);

      return () => {
        scroll.off("scroll", onScroll);
      };
    }
  }, [scroll, scrollY]);*/
  }

  return (
    <div className="row m-0 HomeSection3 position-relative mylr overflow-hidden">
      <div className="col-12 p-0 pt-5">
        <motion.div
          className="row m-0 pt-5 px-3 justify-content-center position-relative"
          id="section-1"
        >
          <motion.div
            style={{
              minHeight: "20vh",
              transformOrigin: "center",
              transition: "opacity 0.2s ease-out",
            }}
            data-scroll
            data-scroll-sticky
            data-scroll-target="#section-1"
            className="fontnormal col-lg-6 col-12 position-sticky bighead2 top-0 text-light fw-bolder text-uppercase d-flex justify-content-center align-items-center text-center flex-column"
          >
            <span className="overflow-hidden">
              <FadeInUp delay={0}>
                <div className="p-0 m-0">More About</div>
              </FadeInUp>
            </span>
            <span className="overflow-hidden">
              <FadeInUp delay={0}>Ahmed</FadeInUp>
            </span>
          </motion.div>
          <div className="col-12 position-relative z-3 ">
            <div className="row m-0 w-100 justify-content-center">
              <div className="col-3 mt-5 pt-5">
                <div
                  style={{
                    width: "100%",
                    height: "600px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 3,
                  }}
                  className=" rounded-pill border"
                >
                  <img
                    src={
                      "https://images.unsplash.com/photo-1569470451072-68314f596aec?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-10 text-center py-5">
                <div className="fs-2 w-75 mx-auto fontnormal text-light">
                  I'M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST IN TOKYO. MY
                  PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND
                  INTUITIVE DESIGN SHINES THROUGH IN MY WORK.
                </div>
                <p className="text-light fs-5 pt-3 w-75 mx-auto ">
                  I'm on the cutting edge of no-code tools that allow me to
                  bring my creative visions to life. Though my methods may be
                  unconventional, my dedication to the craft is unparalleled. I
                  thrive on finding "unexpected solutions" and believe that with
                  the right perspective, design can elevate the human experience
                </p>
                <div className="btn border border-light px-lg-4 px-3 fw-bolder text-uppercase py-2 rounded-5 mt-3 text-light fs-5">
                  Contact Now
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSection4;
