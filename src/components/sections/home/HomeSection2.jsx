import React, { useEffect } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import bgimage from "../../media/NEXBOT - robot character concept@1-1912x1076.jpg";
import Spline from "@splinetool/react-spline";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
function HomeSection2() {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <div className="row m-0 HomeSection2 overflow-hidden   ">
      <div className="col-12 p-0 h-100 d-flex flex-column justify-content-between">
        {!isMobile ? (
          <Spline
            scene="https://prod.spline.design/iqHcspqDDPBm8pbu/scene.splinecode"
            style={{ y }}
          />
        ) : (
          <motion.img
            src={
              "https://images.unsplash.com/photo-1638184984605-af1f05249a56?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            style={{ y }}
            alt=""
            className="img-fluid imageheight2 h-100  "
          />
        )}
      </div>
    </div>
  );
}

export default HomeSection2;
