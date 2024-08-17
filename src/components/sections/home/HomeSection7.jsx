import React from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";

function HomeSection7() {
  return (
    <div className="row m-0  py-lg-5 py-1 position-relative ">
      <div className="col-12 p-0 py-5">
        <div className="row m-0 py-2 px-lg-3 ps-1 justify-content-between">
          <div className="col-4 position-sticky top-0  align-self-start d-md-block d-none">
            <div className="display-1 text-light pt-lg-3 fontnormal fw-bolder text-uppercase d-flex justify-content-center align-items-start flex-column">
              <span className="overflow-hidden">
                <FadeInUp delay={0.4}> Motiation </FadeInUp>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 text-start  d-md-none d-block">
            <div className="display-1 text-light pt-lg-3 fontnormal fw-bolder text-uppercase d-flex justify-content-center align-items-start flex-column">
              <span className="overflow-hidden">
                <FadeInUp delay={0.4}> Motiation </FadeInUp>
              </span>
            </div>
          </div>
          <div className="col-5 d-md-block d-none">
            <p className="fs-4 fontnormal text-light">
              More than a job, web design is an outlet for your vision. You have
              the power to take an idea from concept to reality. Your sites can
              tell a story, "show off a brand", or change lives. As the web
              expands, so do the possibilities. You also have the flexibility to
              work remotely or in a fun agency setting. And nothing beats the
              rush of seeing your live sites in action.
            </p>{" "}
            <p className="fs-4 fontnormal text-light mt-5">
              More than a job, web design is an outlet for your vision. You have
              the power to take an idea from concept to reality. Your sites can
              tell a story, "show off a brand", or change lives. As the web
              expands, so do the possibilities. You also have the flexibility to
              work remotely or in a fun agency setting. And nothing beats the
              rush of seeing your live sites in action.
            </p>
          </div>{" "}
          <div className="col-12 pt-4 d-md-none d-block">
            <p className="fs-6 fontnormal small text-light">
              More than a job, web design is an outlet for your vision. You have
              the power to take an idea from concept to reality. Your sites can
              tell a story, "show off a brand", or change lives. As the web
              expands, so do the possibilities. You also have the flexibility to
              work remotely or in a fun agency setting. And nothing beats the
              rush of seeing your live sites in action.
            </p>{" "}
            <p className="fs-6 fontnormal small text-light mt-3">
              More than a job, web design is an outlet for your vision. You have
              the power to take an idea from concept to reality. Your sites can
              tell a story, "show off a brand", or change lives. As the web
              expands, so do the possibilities. You also have the flexibility to
              work remotely or in a fun agency setting. And nothing beats the
              rush of seeing your live sites in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection7;
