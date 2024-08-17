import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { height, translate, translate2 } from "./Anim";
import Body from "./Body";
function Nav() {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "about me",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={"bg-black  overflow-hidden position-relative"}
    >
      <div className={""}>
        <div className={""}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <div className="fs-2 w-100  position-absolute bottom-0 pb-3">
            <div className="containerz mx-auto">
              <div className="row w-100 fontnormal justify-content-between">
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
                  className="col-lg-5 col-12 fs-3 ps-lg-5 ps-0 py-lg-0 py-3 text-md-end text-center text-light d-md-flex d-none justify-content-between text-uppercase"
                  animate="enter"
                  exit="exit"
                >
                  <div className="div">
                    <span className="pe-3">Instagram</span>
                    <i
                      class="fa-solid fa-arrow-up"
                      style={{ transform: "rotate(-40deg)" }}
                    ></i>
                  </div>{" "}
                  <div className="div">
                    <span className="pe-3">Facebook</span>
                    <i
                      class="fa-solid fa-arrow-up"
                      style={{ transform: "rotate(-40deg)" }}
                    ></i>
                  </div>
                  <div className="div">
                    <span className="pe-3">Linkedin</span>
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
                  className="col-lg-5 col-12 fs-6  ps-0 py-lg-0 py-3 text-md-end text-center text-light d-md-none d-flex text-center justify-content-center text-uppercase"
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
      </div>{" "}
      <img
        src="https://www.freeiconspng.com/uploads/transparent-grid-png-1.png"
        alt=""
        className="position-absolute top-0   w-100"
        style={{ opacity: "12%", zIndex: 10000, pointerEvents: "none" }}
      />
    </motion.div>
  );
}

export default Nav;
