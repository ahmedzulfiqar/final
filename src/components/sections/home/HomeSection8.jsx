import React from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";
import Stackcard from "../../blocks/Stackcard";

function HomeSection8() {
  return (
    <div className="row m-0  py-lg-0 py-1 position-relative ">
      <div className="col-12 p-0 py-5">
        <div className="row m-0 py-2 px-lg-3 justify-content-between">
          <div className="col-lg-4 col-12 position-sticky top-0 pt-3 mb-5 align-self-start d-md-block d-none">
            <div className="display-1 text-light text-start fontnormal pt-lg-0 fw-bolder text-uppercase d-flex justify-content-center align-items-start flex-column">
              <span className="overflow-hidden">
                <FadeInUp delay={0}> Favourite </FadeInUp>
              </span>
              <span className="overflow-hidden">
                <FadeInUp delay={0.2}> Stack </FadeInUp>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 text-start  d-md-none d-block">
            <div className="display-1 ps-1 text-light fontnormal pt-lg-3 fw-bolder text-uppercase d-flex justify-content-center align-items-start text-start flex-column">
              <span className="overflow-hidden">
                <FadeInUp delay={0}> Favourite </FadeInUp>
              </span>
              <span className="overflow-hidden">
                <FadeInUp delay={0.2}> Stack </FadeInUp>
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-lg-5">
            <div className="row m-0 w-100 mt-lg-0 mt-4">
              <div className="col-12 p-0">
                <Stackcard
                  data={{
                    title: "Javascript ",
                    subtitle: "front end development",
                    para: "JavaScript, often abbreviated as JS, is a programming language and technology alongside HTML and CSS.",
                    image:
                      "https://framerusercontent.com/images/QYmq308u4qG3O15gu4OOjuYYbyo.png",
                  }}
                />
                <Stackcard
                  data={{
                    title: "Figma ",
                    subtitle: "Design Tool",
                    para: "Figma is a collaborative web application for design with additional offline features for macOS and Windows.",
                    image:
                      "https://framerusercontent.com/images/TZGKAHVLPTSUJdTkEUZl8tby7i8.png",
                  }}
                />{" "}
                <Stackcard
                  data={{
                    title: "FRAMER",
                    subtitle: "Web design platform",
                    para: "The internet is your canvas. Framer is where we design and publish stunning sites.",
                    image:
                      "https://framerusercontent.com/images/8IwIgcK4xKufK1r1bGdf5fwrWek.png",
                  }}
                />
                <Stackcard
                  data={{
                    title: "NOde Js",
                    subtitle: "Back end development",
                    para: "Node.js is a powerful, open-source JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server side.",
                    image:
                      "https://th.bing.com/th/id/R.c502658a509d27b53679b3ef73c0d82f?rik=dFP%2b9LyCq64MMg&pid=ImgRaw&r=0",
                  }}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default HomeSection8;
