import React, { useState } from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";
import ServiceCard from "../../blocks/ServiceCard";

function HomeSection6() {
  const [servicedata, setservicedata] = useState({ title: "" });
  return (
    <div className="row m-0 HomeSection3 py-0 ">
      <div className="col-12 p-0 py-5">
        <div className="row m-0 py-2 px-0">
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

        <div className="row m-0 mt-lg-5 mt-md-3 mt-2 px-lg-0 px-0">
          <div className="col-xxl-4 col-md-6 col-12 align-self-center">
            <ServiceCard
              data={{
                title: "WEB DESIGN",
                para: "We Design visually appealing websites. We create intuitive navigation and layouts that visitors can easily find what they're looking for, making your site both beautiful and functional.",
                image: "",
                index: 1,
              }}
              setservicedata={setservicedata}
            />
          </div>{" "}
          <div className="col-xxl-4 col-md-6 col-12 align-self-center">
            <ServiceCard
              data={{
                title: "WEB DEVELOPMENT",
                para: "We Develop scalable websites For your business. We ensures that your website is fast and optimized for performance, providing a seamless experience for your users.",
                image: "",
                index: 2,
              }}
              setservicedata={setservicedata}
            />
          </div>{" "}
          <div className="col-xxl-4 col-md-6 col-12 align-self-center">
            <ServiceCard
              data={{
                title: "APP DEVELOPMENT",
                para: "We Build  mobile apps that deliver a smooth user experience. We focus on creating apps that are not only functional but also engaging, ensuring your users keep coming back.",
                image: "",
                index: 3,
              }}
              setservicedata={setservicedata}
            />
          </div>{" "}
          <div className="col-md-6 col-12 align-self-center">
            <ServiceCard
              data={{
                title: "E-COMMERCE SOLUTIONS",
                para: "We Create powerful e-commerce platforms that drive sales. We develop online stores with user-friendly interfaces, secure payment options, and streamlined checkout processes to maximize your business's growth.",
                image: "",
                index: 4,
              }}
              setservicedata={setservicedata}
            />
          </div>{" "}
          <div className="col-md-6 col-12 align-self-center">
            <ServiceCard
              data={{
                title: "BRAND DEVELOPMENT",
                para: "We Build a strong and memorable brand identity. We help you create a consistent brand image across all platforms, ensuring your business stands out in a crowded market and resonates with your target audience.",
                image: "",
                index: 5,
              }}
              setservicedata={setservicedata}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection6;
