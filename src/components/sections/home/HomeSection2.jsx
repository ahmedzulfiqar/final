import React, { useEffect } from "react";
import { useTransform, motion } from "framer-motion";
import bgimage from "../../media/photo-1682687220063-4742bd7fd538.avif";

function HomeSection2() {

  return (
    <div className="row m-0 HomeSection2 overflow-hidden  ">
      <div className="col-12 p-0 h-100 d-flex flex-column justify-content-between">
        <motion.img
          src={
            "https://images.unsplash.com/photo-1569470451072-68314f596aec?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="img-fluid h-100 imageheight2 "
          data-scroll
          data-scroll-speed="-3"
        />
      </div>
    </div>
  );
}

export default HomeSection2;
