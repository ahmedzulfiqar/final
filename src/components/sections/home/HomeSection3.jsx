import { motion } from "framer-motion";
import React from "react";
import {
  FadeInUp,
  SlideInFromLeft,
  ScaleUp,
} from "../../motions/Framermotionvalues";
import Card from "../../blocks/Card";
import Portfoliodata from "../../data/Portfoliodata";
function HomeSection1() {
  return (
    <div className="row m-0 HomeSection3  " >
      <div className="col-12 p-0 py-5">
        <div className="row m-0 py-2 px-3">
          <div className="fontnormal col-lg-6 col-12 display-1 text-light fw-bolder text-uppercase d-flex justify-content-start align-items-start text-start flex-column">
            <span className=" overflow-hidden ">
              <FadeInUp delay={0.5}>
                <div className=" p-0 m-0">Feathured</div>
              </FadeInUp>
            </span>
            <span className=" overflow-hidden">
              <FadeInUp delay={0.7}> Work</FadeInUp>{" "}
            </span>
          </div>{" "}
          <div className="fontnormal  col-lg-6 col-12 fs-3 text-light  justify-content-end pt-xl-0 pt-2 align-items-center text-start  d-md-flex d-none ">
            <span className=" overflow-hidden ">
              <ScaleUp delay={1}>
                <div className=" p-0 m-0">
                  My creative spirit comes alive in the digital realm. With
                  nimble fingers flying across the keyboard, I craft clear
                  experiences out of nothing but ones and zeroes.
                </div>
              </ScaleUp>
            </span>
          </div>{" "}
          <div className="fontnormal  col-lg-6 col-12 fs-6 pt-2 text-light d-flex justify-content-end align-items-center text-start   d-md-none d-flex ">
            <span className=" overflow-hidden ">
              <ScaleUp delay={1}>
                <div className=" p-0 m-0">
                  My creative spirit comes alive in the digital realm. With
                  nimble fingers flying across the keyboard, I craft clear
                  experiences out of nothing but ones and zeroes.
                </div>
              </ScaleUp>
            </span>
          </div>
        </div>
        <div className="row m-0 py-5 workcard">
          <div className="col-md-6 col-12 p-0">
            {Portfoliodata.slice(Portfoliodata.length / 2).map((i) => {
              return (
                <div className="row m-0 pe-md-3 px-md-0 px-3">
                  <Card i={i} />
                </div>
              );
            })}
          </div>{" "}
          <div className="col-md-6 col-12 p-0">
            {Portfoliodata.slice(0, Portfoliodata.length / 2).map((i) => {
              return (
                <div className="row m-0 ps-md-3 px-md-0 px-3">
                  <Card i={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
