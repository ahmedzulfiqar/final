import React from "react";
import { FadeInUp } from "../../motions/Framermotionvalues";

function HomeSection10() {
  return (
    <div className="row m-0  py-lg-5 py-1 mt-lg-5 position-relative ">
      <div className="col-12 p-0 py-5">
        <div className="row m-0 py-2 px-lg-3 px-1 justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-12">
            <div className="display-3 text-light fontnorml fw-bolder text-uppercase   justify-content-center align-items-center text-center flex-column d-md-flex d-none">
              <span className="overflow-hidden">
                <FadeInUp delay={0.4}> Frequently </FadeInUp>
              </span>{" "}
              <span className="overflow-hidden">
                <FadeInUp delay={0.7}> Asked Questions </FadeInUp>
              </span>{" "}
            </div>{" "}
            <div className="display-6 text-light fontnorml fw-bolder text-uppercase  justify-content-center align-items-center text-center flex-column d-md-none d-flex ">
              <span className="overflow-hidden">
                <FadeInUp delay={0.4}> Frequently </FadeInUp>
              </span>{" "}
              <span className="overflow-hidden">
                <FadeInUp delay={0.7}> Asked Questions </FadeInUp>
              </span>{" "}
            </div>
          </div>
          <div className="col-12 mt-lg-5 mt-4 pt-2 pt-lg-5">
            <div class=" accordion-flush" id="accordionFlushExample">
              <div class="accordion-item mb-4 bg-blackshade  bg-blackshade border border-light border-opacity-10 border-1 rounded-4  px-xxl-3 px-xl-4 px-lg-3 px-md-2 px-sm-1 px-1 py-3">
                <h2 class="accordion-header  bg-blackshade py-xxl-3 py-md-3 py-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div className="row w-100 m-0">
                      <div className="col-11 text-light fontnormal fs-3 align-self-center d-md-block d-none">
                        What industries do you specialize in?
                      </div>{" "}
                      <div className="col-10 text-light fontnormal fs-6 align-self-center d-md-none d-block">
                        What industries do you specialize in?
                      </div>
                      <div className="col-md-1 col-2 text-end align-self-center">
                        <i
                          class="fa fa-plus fs-2 text-light"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body border-top border-secondary border-opacity-25 border-1 mt-2 py-3">
                    <div className="row m-0">
                      <div className="col-10 text-light fw-light fontnormal fs-4 opacity-75 d-md-block d-none">
                        I have experience working across various industries
                        including but not limited to technology, healthcare,
                        fashion, hospitality, and non-profit organizations.
                      </div>{" "}
                      <div className="col-12 text-light fw-light fontnormal fs-6 opacity-75 d-md-none d-block">
                        I have experience working across various industries
                        including but not limited to technology, healthcare,
                        fashion, hospitality, and non-profit organizations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="accordion-item mb-4 bg-blackshade  bg-blackshade border border-light border-opacity-10 border-1 rounded-4  px-xxl-3 px-xl-4 px-lg-3 px-md-2 px-sm-1 px-1 py-3">
                <h2 class="accordion-header  bg-blackshade py-xxl-3 py-md-3 py-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse2"
                    aria-expanded="false"
                    aria-controls="flush-collapse2"
                  >
                    <div className="row w-100 m-0">
                      <div className="col-11 text-light fontnormal fs-3 align-self-center d-md-block d-none">
                        What services do you offer as a designer?
                      </div>{" "}
                      <div className="col-10 text-light fontnormal fs-6 align-self-center d-md-none d-block">
                        What services do you offer as a designer?
                      </div>
                      <div className="col-md-1 col-2 text-end align-self-center">
                        <i
                          class="fa fa-plus fs-2 text-light"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapse2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body border-top border-secondary border-opacity-25 border-1 mt-2 py-3">
                    <div className="row m-0">
                      <div className="col-10 text-light fw-light fontnormal fs-4 opacity-75 d-md-block d-none">
                        As a designer, I offer a range of services including
                        graphic design, web design, branding, illustration, and
                        more. My goal is to provide creative solutions that
                        effectively communicate your message and resonate with
                        your audience.
                      </div>{" "}
                      <div className="col-12 text-light fw-light fontnormal fs-6 opacity-75 d-md-none d-block">
                        As a designer, I offer a range of services including
                        graphic design, web design, branding, illustration, and
                        more. My goal is to provide creative solutions that
                        effectively communicate your message and resonate with
                        your audience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="accordion-item mb-4 bg-blackshade  bg-blackshade border border-light border-opacity-10 border-1 rounded-4  px-xxl-3 px-xl-4 px-lg-3 px-md-2 px-sm-1 px-1 py-3">
                <h2 class="accordion-header  bg-blackshade py-xxl-3 py-md-3 py-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse3"
                    aria-expanded="false"
                    aria-controls="flush-collapse3"
                  >
                    <div className="row w-100 m-0">
                      <div className="col-11 text-light fontnormal fs-3 align-self-center d-md-block d-none">
                        Can you provide examples of your previous work?
                      </div>{" "}
                      <div className="col-10 text-light fontnormal fs-6 align-self-center d-md-none d-block">
                        Can you provide examples of your previous work?
                      </div>
                      <div className="col-md-1 col-2 text-end align-self-center">
                        <i
                          class="fa fa-plus fs-2 text-light"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapse3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body border-top border-secondary border-opacity-25 border-1 mt-2 py-3">
                    <div className="row m-0">
                      <div className="col-10 text-light fw-light fontnormal fs-4 opacity-75 d-md-block d-none">
                        Absolutely! You can browse through my portfolio on this
                        website to see a selection of my previous projects. Each
                        project showcases my design capabilities and creative
                        approach across various mediums and industries.
                      </div>{" "}
                      <div className="col-12 text-light fw-light fontnormal fs-6 opacity-75 d-md-none d-block">
                        Absolutely! You can browse through my portfolio on this
                        website to see a selection of my previous projects. Each
                        project showcases my design capabilities and creative
                        approach across various mediums and industries.
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="accordion-item mb-4 bg-blackshade  bg-blackshade border border-light border-opacity-10 border-1 rounded-4  px-xxl-3 px-xl-4 px-lg-3 px-md-2 px-sm-1 px-1 py-3">
                <h2 class="accordion-header  bg-blackshade py-xxl-3 py-md-3 py-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    <div className="row w-100 m-0">
                      <div className="col-11 text-light fontnormal fs-3 align-self-center d-md-block d-none">
                        How do you approach branding projects?
                      </div>{" "}
                      <div className="col-10 text-light fontnormal fs-6 align-self-center d-md-none d-block">
                        How do you approach branding projects?
                      </div>
                      <div className="col-md-1 col-2 text-end align-self-center">
                        <i
                          class="fa fa-plus fs-2 text-light"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body border-top border-secondary border-opacity-25 border-1 mt-2 py-3">
                    <div className="row m-0">
                      <div className="col-10 text-light fw-light fontnormal fs-4 opacity-75 d-md-block d-none">
                        When it comes to branding projects, I believe in delving
                        deep into understanding the client's brand identity,
                        target audience, and market positioning. I strive to
                        create cohesive visual identities that effectively
                        communicate the brand's values and personality across
                        various touchpoints, including logos, color palettes,
                        typography, and brand guidelines.
                      </div>{" "}
                      <div className="col-12 text-light fw-light fontnormal fs-6 opacity-75 d-md-none d-block">
                        When it comes to branding projects, I believe in delving
                        deep into understanding the client's brand identity,
                        target audience, and market positioning. I strive to
                        create cohesive visual identities that effectively
                        communicate the brand's values and personality across
                        various touchpoints, including logos, color palettes,
                        typography, and brand guidelines.
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="accordion-item mb-4 bg-blackshade  bg-blackshade border border-light border-opacity-10 border-1 rounded-4  px-xxl-3 px-xl-4 px-lg-3 px-md-2 px-sm-1 px-1 py-3">
                <h2 class="accordion-header  bg-blackshade py-xxl-3 py-md-3 py-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse5"
                    aria-expanded="false"
                    aria-controls="flush-collapse5"
                  >
                    <div className="row w-100 m-0">
                      <div className="col-11 text-light fontnormal fs-3 align-self-center d-md-block d-none">
                        Can you walk me through your design process?
                      </div>{" "}
                      <div className="col-10 text-light fontnormal fs-6 align-self-center d-md-none d-block">
                        Can you walk me through your design process?
                      </div>
                      <div className="col-md-1 col-2 text-end align-self-center">
                        <i
                          class="fa fa-plus fs-2 text-light"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapse5"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body border-top border-secondary border-opacity-25 border-1 mt-2 py-3">
                    <div className="row m-0">
                      <div className="col-10 text-light fw-light fontnormal fs-4 opacity-75 d-md-block d-none">
                        Certainly! My design process typically involves
                        understanding the client's needs and objectives,
                        conducting research, brainstorming ideas, sketching
                        concepts, refining designs, and delivering high-quality
                        final products.
                      </div>{" "}
                      <div className="col-12 text-light fw-light fontnormal fs-6 opacity-75 d-md-none d-block">
                        Certainly! My design process typically involves
                        understanding the client's needs and objectives,
                        conducting research, brainstorming ideas, sketching
                        concepts, refining designs, and delivering high-quality
                        final products.
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="accordion-item mb-4 bg-blackshade  bg-blackshade border border-light border-opacity-10 border-1 rounded-4  px-xxl-3 px-xl-4 px-lg-3 px-md-2 px-sm-1 px-1 py-3">
                <h2 class="accordion-header  bg-blackshade py-xxl-3 py-md-3 py-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse6"
                    aria-expanded="false"
                    aria-controls="flush-collapse6"
                  >
                    <div className="row w-100 m-0">
                      <div className="col-11 text-light fontnormal fs-3 align-self-center d-md-block d-none">
                        What software and tools do you use for your designs?
                      </div>{" "}
                      <div className="col-10 text-light fontnormal fs-6 align-self-center d-md-none d-block">
                        What software and tools do you use for your designs?
                      </div>
                      <div className="col-md-1 col-2 text-end align-self-center">
                        <i
                          class="fa fa-plus fs-2 text-light"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-collapse6"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body border-top border-secondary border-opacity-25 border-1 mt-2 py-3">
                    <div className="row m-0">
                      <div className="col-10 text-light fw-light fontnormal fs-4 opacity-75 d-md-block d-none">
                        I am proficient in using industry-standard design
                        software such as Adobe Creative Suite (Photoshop,
                        Illustrator, InDesign), Sketch, Figma, and others.
                      </div>{" "}
                      <div className="col-12 text-light fw-light fontnormal fs-6 opacity-75 d-md-none d-block">
                        I am proficient in using industry-standard design
                        software such as Adobe Creative Suite (Photoshop,
                        Illustrator, InDesign), Sketch, Figma, and others.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection10;
