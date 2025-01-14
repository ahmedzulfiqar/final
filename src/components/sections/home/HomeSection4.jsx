import React, { useEffect, useRef, useState } from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import bgimage from "../../media/photo-1682687220063-4742bd7fd538.avif";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
function HomeSection4() {
  const ref = useRef(null);

  const isMobile = useIsMobile();

  const offset = isMobile ? ["12%", "end start"] : ["20%", "end start"];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return (
    <div className="row m-0 HomeSection3 pb-lg-5 position-relative" ref={ref}>
      <div className="col-12 p-0 pt-5">
        <motion.div className="row  m-0 pt-5 px-3 justify-content-center position-relative">
          <motion.div
            style={{
              minHeight: "100vh",
              scale,
              opacity,
              transformOrigin: "center",
              transition: "opacity 0.2s ease-out",
            }}
            className="fontnormal col-lg-6   col-12 position-sticky top-0 bighead2 top-0 text-light fw-bolder text-uppercase d-flex justify-content-center align-items-center text-center flex-column"
          >
            <span className="overflow-hidden">
              <FadeInUp delay={0}>
                <div className="p-0 m-0">More About</div>
              </FadeInUp>
            </span>
            <span className="overflow-hidden">
              <FadeInUp delay={0.2}>Ahmed</FadeInUp>
            </span>
          </motion.div>
          <div className="col-12 z-3 mt-5">
            <div className="row m-0 w-100 justify-content-center">
              <div className="col-xxl-3 col-lg-4 col-sm-5 col-10 col-12 mt-5 pt-5">
                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 3,
                  }}
                  className="imagerounder "
                >
                  <motion.img
                    src={bgimage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      transformOrigin: "middle",
                    }}
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.2 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xxl-10 col-12 text-center py-5 bg-black d-md-block d-none ">
                <div className="fs-2 w-75 mx-auto fontnormal text-light text-uppercase">
                  I'm a creative web developer and designer based in Karachi. My
                  passion for clean code, user experiences, and modern design
                  principles is evident in every project I undertake.
                </div>
                <p className="text-light fs-5 pt-3 w-75 mx-auto ">
                  I'm at the forefront of utilizing the latest web development
                  technologies to bring my innovative ideas to life. While my
                  approach may be unconventional, my commitment to excellence is
                  unmatched. I excel in crafting unique solutions and believe
                  that with the right mindset, web design can transform user
                  experiences.
                </p>
                <div className="btn border border-light px-lg-4 px-3 fw-bolder text-uppercase py-2 rounded-5 mt-3 text-light fs-5">
                  Contact Now
                </div>
              </div>{" "}
              <div className="col-12 text-center py-5 bg-black d-md-none d-block px-0">
                <div className="fs-5 fontnormal  text-light text-uppercase">
                  I'm a creative web developer and designer based in Karachi. My
                  passion for clean code, user experiences, and modern design
                  principles is evident in every project I undertake.
                </div>
                <p className="text-light fs-6 small pt-3  mx-auto ">
                  I'm at the forefront of utilizing the latest web development
                  technologies to bring my innovative ideas to life.
                </p>
                <div className="btn border border-light px-lg-4 px-3 fw-bolder text-uppercase py-2 rounded-5 mt-3 text-light fs-6">
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
