import { easeOut, motion } from "framer-motion";
import React from "react";
import {
  FadeInUp,
  SlideInFromLeft,
  ScaleUp,
} from "../../motions/Framermotionvalues";
function HomeSection1() {
  return (
    <div className="row m-0   HomeSection1 overflow-hidden ">
      <div className="col-12 p-0 h-100 d-flex flex-column  p-2 justify-content-between">
        <div className="row m-0 justify-content-center  setheighthome">
          <div className="fontnormal col-lg-6 col-12 bighead text-light fw-bolder text-uppercase d-flex justify-content-center align-items-center text-center flex-column">
            <span className=" overflow-hidden">
              <FadeInUp delay={1}>
                <div className=" p-0 m-0">Ahmed</div>
              </FadeInUp>
            </span>
            <span className=" overflow-hidden">
              <FadeInUp delay={1.3}> Zulfiqar</FadeInUp>{" "}
            </span>
          </div>
        </div>
        <motion.div
          className="row m-0   h-auto text-uppercase bg-black py-2 "
          initial={{ transform: "translateY(100%)" }}
          whileInView={{ opacity: 1 }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 1.8, easings: easeOut }}
        >
          <div className="col-md-6 col-12 text-md-start text-center">
            <div className="text-light fontnormal">
              <span className="d-none d-md-inline fs-5">
                Based In Karachi , Pakistan
              </span>
              <span className="d-inline d-md-none small">
                Based In Karachi , Pakistan
              </span>
            </div>
          </div>{" "}
          <div className="col-md-6  col-12 text-md-end text-center py-md-2 py-2">
            <div className=" text-light fontnormal">
              <span className="d-none d-md-inline fs-5">
                WEB DESGINER + WEB DEVELOPER
              </span>
              <span className="d-inline d-md-none small">
                WEB DESGINER + WEB DEVELOPER
                {
                  //Hi everyone, I recently designed a website for [niche], and would love some feedback.
                }
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSection1;
