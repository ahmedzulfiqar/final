import React, { useEffect, useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import bgimage from "../../media/photo-1682687220063-4742bd7fd538.avif";

function HomeSection5() {
  const refer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refer,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);
  return (
    <div className="row m-0 HomeSection2 overflow-scroll    " ref={refer}>
      <div className="col-12 p-0 h-100 d-flex flex-column justify-content-between">
        <motion.img
          src={"https://img.freepik.com/free-vector/abstract-perspective-graph-pattern-grid-vector-design_1017-45232.jpg?t=st=1723717004~exp=1723720604~hmac=d62193e3dbd3952265795f5bfeaac3aeeb6e83a77c2fd4ada1cd90786dd6e3e4&w=1800"}
          style={{ y }}
          alt=""
          className="img-fluid imageheight2 h-100 opacity-25"
        />
      </div>
    </div>
  );
}

export default HomeSection5;
