import React from "react";

function ReviewCard({ data, index }) {
  return (
    <div
      className={`keen-slider__slide number-slide${
        index + 1
      } display-1 fw-bolder text-light`}
    >
      <div
        className={`divcard2 bg-blackshade   rounded-4 border border-light border-opacity-10 border-1 px-lg-4 py-lg-4 px-3 py-3 `}
      >
        <div className="row m-0">
          <div className="col-2 align-self-center p-0  d-lg-flex d-none  justify-content-center">
            <img
              src="https://framerusercontent.com/images/YHldWOe8qlJaqM5a7SYHtcXpIHw.jpeg?scale-down-to=1024"
              alt=""
              className="img-fluid img-fluid  rounded-4 p-2 "
            />
          </div>
          <div className="col-8 align-self-center d-lg-block d-none">
            <div className="fs-4 pb-1 fontnormal text-uppercase text-light fw-bolder">
              Rick O'connell
            </div>
            <div className="fs-5 fontnormal text-light opacity- fw-lighter pt-0 ">
              Cloud Sales Executive, AMD
            </div>
          </div>{" "}
          <div className="col-lg-12  align-self-center d-lg-none d-block">
            <div className="fs-5 pb-1 fontnormal text-uppercase text-light fw-bolder">
              Rick O'connell
            </div>
            <div className="fs-6 fontnormal text-light opacity- fw-lighter pt-0 ">
              Cloud Sales Executive, AMD
            </div>
          </div>
          <div className="col-2 align-self-center d-lg-flex d-none justify-content-center">
            <img
              src="https://framerusercontent.com/images/1cK1mwpYlMOpUh9NS6hpCbrlsU.png"
              alt=""
              className="img-fluid w-100"
            />
          </div>
          <div className="col-12  mt-3 bg-black px-lg-4 px-2 py-lg-4 py-3 border border-light border-opacity-10 border-1 rounded-4">
            <div className="fs-4 text-uppercase text-light fontnormal fw-bolder d-lg-block d-none">
              "I hired Mecheale to redesign my company's website. The process
              was smooth and easy. They listened to all my needs and delivered a
              site that exceeded my expectations"
            </div>
            <div className="fs-6 text-uppercase text-light fontnormal fw-bolder d-lg-none d-block">
              "I hired Mecheale to redesign my company's website. The process
              was smooth and easy. They listened to all my needs and delivered a
              site that exceeded my expectations"
            </div>
            <div className="col-12 fs-5 pt-3">
              <i class="fa fa-star text-warning pe-2" aria-hidden="true"></i>
              <i class="fa fa-star text-warning pe-2" aria-hidden="true"></i>
              <i class="fa fa-star text-warning pe-2" aria-hidden="true"></i>
              <i class="fa fa-star text-warning pe-2" aria-hidden="true"></i>
              <i class="fa fa-star text-warning pe-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
