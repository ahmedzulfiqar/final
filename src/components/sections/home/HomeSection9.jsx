import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "../../blocks/ReviewCard";
import ReviewData from "../../data/ReviewData";
import { FadeInUp } from "../../motions/Framermotionvalues";
function HomeSection9() {
  const animation = { duration: 50000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 1,
      spacing: 20,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      console.log("Slider 1 - Updated Index:", s.track.details.abs);
      // Move slider to the right by adding to the index
      s.moveToIdx(s.track.details.abs + 1, true, animation); // Adjust the step size as needed
    },
    animationEnded(s) {
      console.log("Slider 1 - Animation Ended Index:", s.track.details.abs);
      s.moveToIdx(s.track.details.abs + 1, true, animation); // Adjust the step size as needed
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      console.log("Slider 2 - Updated Index:", s.track.details.abs);
      // Move slider to the left by subtracting from the index
      s.moveToIdx(s.track.details.abs - 1, true, animation); // Adjust the step size as needed
    },
    animationEnded(s) {
      console.log("Slider 2 - Animation Ended Index:", s.track.details.abs);
      s.moveToIdx(s.track.details.abs - 1, true, animation); // Adjust the step size as needed
    },
  });

  return (
    <div className="row m-0  py-lg-5 py-1 mt-lg-5 position-relative  d-lg-block d-none">
      <div className="col-12 p-0 py-lg-5 my-lg-5">
        <div className="row m-0 py-2 px-3 justify-content-center text-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-12">
            <div className="display-3 text-light fontnorml fw-bolder text-uppercase  d-flex justify-content-center align-items-center text-center flex-column">
              <span className="overflow-hidden">
                <FadeInUp delay={0.4}> Trusted By </FadeInUp>
              </span>{" "}
              <span className="overflow-hidden">
                <FadeInUp delay={0.7}> International Brands </FadeInUp>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="reviewcards position-relative">
          <div className="bggradient d-md-block d-none">a</div>
          <div ref={sliderRef} className="keen-slider mt-5 pt-lg-5 ">
            {ReviewData.map((data, index) => {
              return <ReviewCard data={data} index={index} />;
            })}
          </div>{" "}
          <div ref={sliderRef2} className="keen-slider mt-0 pt-lg-5 d-lg-flex d-none">
            {ReviewData.map((data, index) => {
              return <ReviewCard data={data} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection9;
