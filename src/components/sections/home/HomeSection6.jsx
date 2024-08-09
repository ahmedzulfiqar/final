import React from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";

function HomeSection6() {
  return (
    <div className="row m-0 HomeSection3 py-5 ">
      <div className="col-12 p-0 py-5">
        <div className="row m-0 py-2 px-3">
          <div className="fontnormal col-lg-6 col-12 display-1 text-light fw-bolder text-uppercase d-flex justify-content-start align-items-start text-start flex-column">
            <span className=" overflow-hidden ">
              <FadeInUp delay={0.5}>
                <div className=" p-0 m-0">My</div>
              </FadeInUp>
            </span>
            <span className=" overflow-hidden">
              <FadeInUp delay={0.7}> expertise</FadeInUp>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection6;
