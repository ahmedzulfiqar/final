import React from "react";

function Stackcard({ data }) {
  return (
    <div className="cardiv bg-blackshade rounded-4 mb-xxl-5 mb-3 border border-light border-opacity-10 border-1  px-xxl-4 px-2 py-4 ">
      <div className="row m-0">
        <div className="col-xl-2 col-12 pe-xl-4 pe-0 ps-0 d-flex justify-content-xl-start justify-content-center align-self-start ">
          <div className="imagecoverf d-flex mb-0 mb-2 py-xxl-0 py-2 justify-content-center bg-black border border-light border-opacity-10 border-1 rounded-4 d-  w-100 ">
            <img
              src={data.image}
              alt=""
              className="img-fluid p-xxl-4 p-0 h-100 "
            />
          </div>
        </div>
        <div className="col-xl-10 col-12 text-light fontnormal bg-black border border-light border-opacity-10 border-1 py-4 ps-4 rounded-4">
          <div className="fs-2 text-uppercase fw-bold">{data.title} </div>
          <div className="fs-5 pt-2 text-uppercase">{data.subtitle}</div>
          <div className="fs-5 pt-3 text-light opacity-75">{data.para}</div>
        </div>
      </div>
    </div>
  );
}

export default Stackcard;
