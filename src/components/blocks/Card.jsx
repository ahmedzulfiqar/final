import React from "react";
import image from "../media/Untitled design.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
function Card({ i }) {
  return (
    <div className="col-12 mycursor p-0 my-3 border border-light border-opacity-10 border-1 rounded-3 overflow-hidden">
      <div className="row m-0">
        <div className="col-12 p-0">
          <div className="image-container">
            <motion.img
              src={i.image}
              alt=""
              className="img-fluid"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-12 bg-blackshade py-4">
          <div className="row m-0 d-md-flex d-none">
            <div className="col-8">
              <div className="fs-2 fontnormal text-light">THE DARK BOT</div>
              <div className="fs-5 ps-1 text-light opacity-75 text-uppercase">
                Web Design
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end align-self-center opacity-75">
              <div className="border py-2 border-light px-4 rounded-pill text-light">
                2024
              </div>
            </div>
          </div>{" "}
          <div className="row m-0 d-md-none d-flex">
            <div className="col-8">
              <div className="fs-6 fontnormal text-light">THE DARK BOT</div>
              <div className="fs-6 ps-1 text-light opacity-75 text-uppercase">
                Web Design
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end align-self-center opacity-75">
              <div className="border py-2 border-light px-4 rounded-pill text-light">
                2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
