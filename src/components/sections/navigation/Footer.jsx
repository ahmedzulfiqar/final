import { motion } from "framer-motion";
import React from "react";
import { translate2 } from "./Anim";

function Footer() {
  return (
    <div className="col-12 mt-lg-0 mt-5 pt-lg-2 pt-5">
      {" "}
      <div className="fs-2 w-100    bottom-0 pb-lg-3 pb-3">
        <div className="containerz mx-auto  -">
          <div className=" w-100 d-flex fontnormal  justify-content-between">
            <motion.div
              custom={[0.3, 0]}
              variants={translate2}
              initial="initial"
              animate="enter"
              className="col-lg-6 col-12 fs-3  text-md-start text-center text-light d-lg-block d-none"
              exit="exit"
            >
              <span></span> WEBDEVIFY DEVELOPERS
            </motion.div>
            <motion.div
              custom={[0.3, 0]}
              variants={translate2}
              initial="initial"
              className="col-xxl-5 col-lg-6 col-12 fs-3 ps-lg-5 ps-0 py-lg-0 py-3 text-md-end text-center text-light d-lg-flex d-none justify-content-between text-uppercase"
              animate="enter"
              exit="exit"
            >
              <div className="div mycursor">
                <span className="pe-xxl-3">Instagram</span>
                <i
                  class="fa-solid fa-arrow-up"
                  style={{ transform: "rotate(-40deg)" }}
                ></i>
              </div>{" "}
              <div className="div mycursor">
                <span className="pe-xxl-3">Facebook</span>
                <i
                  class="fa-solid fa-arrow-up"
                  style={{ transform: "rotate(-40deg)" }}
                ></i>
              </div>
              <div className="div mycursor">
                <span className="pe-xxl-3">Linkedin</span>
                <i
                  class="fa-solid fa-arrow-up"
                  style={{ transform: "rotate(-40deg)" }}
                ></i>
              </div>
            </motion.div>{" "}
            <motion.div
              custom={[0.3, 0]}
              variants={translate2}
              initial="initial"
              className="col-lg-6 col-12 fs-6  ps-0 py-lg-0 py-3 text-md-end text-center text-light d-lg-none d-flex text-center justify-content-center text-uppercase"
              animate="enter"
              exit="exit"
            >
              <div className="div text-center px-2">
                <span className="">Instagram</span>
              </div>{" "}
              <div className="div text-center px-2">
                <span className="">Facebook</span>
              </div>
              <div className="div text-center px-2">
                <span className="">Linkedin</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
