import { easeOut, motion } from "framer-motion";
import React from "react";
function Navbar() {
  return (
    <div className="row m-0 w-100 fontnormal bg-black" >
      <motion.div
        className="col-12 p-0 bg-black py-lg-4 py-3 border-bottom border-dark border-opacity-50"
        initial={{ transform: "translateY(-100px)" }}
        whileInView={{ opacity: 1 }}
        animate={{ transform: "translateY(0px)" }}
        transition={{ duration: 0.7, delay: 1.8, easings: easeOut }}
      >
        <div className="containerz  mx-auto">
          <div className="row m-0 py-lg-1 py-1 justify-content-between">
            <div className="col-4 align-self-center ">
              <div className="text-light  fw-bolder">
                <span className="d-none d-md-inline display-6 fw-bold">
                  WEBDEVIFY
                </span>
                <span className="d-inline d-md-none fs-2">WEBDEVIFY </span>
              </div>
            </div>
            <div className="col-4 text-md-center align-self-center text-end mycursor ">
              <i class="fa fa-bars text-light fs-2" aria-hidden="true"></i>
            </div>
            <div className="col-4 text-center  justify-content-end d-md-flex d-none">
              <div className="btn border border-light px-lg-4 px-3 fw-bolder text-uppercase py-2 rounded-5 text-light fs-5">
                Contact Now
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
