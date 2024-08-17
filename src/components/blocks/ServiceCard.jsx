import React from "react";

function ServiceCard({ data, setservicedata }) {
  return (
    <div className="servicecard   bg-blackshade p-0 my-3 py-lg-5 py-3 px-lg-3 px-md-2 px-0 border border-light border-opacity-10 border-1 rounded-3 overflow-hidden">
      <div className="row m-0">
        <div className="col-lg-10 col-12">
          <div className="fs-4 text-light fw-bolder ps-2 pb-2">
            ( {data.index} )
          </div>
          <div className="fs-1 text-light fw-bolder fontnormal">
            {data.title}
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end align-self-start d-lg-flex d-none">
          <div className="btn  bg-black text-secondary border border-light border-opacity-25 rounded-circle mycursor">
            <i class="fa fa-plus " aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-12 pt-lg-4 pt-3">
          <div className="para fs-5 fontnormal text-light opacity-50">
            {data.para}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
