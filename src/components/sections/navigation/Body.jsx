import { motion } from "framer-motion";
import { blur, translate } from "./Anim";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="row m-0 text-center pt-xxl-5 pt-0  mt-xxl-5 mt-md-2 mt-5">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <>
            <a
              key={`l_${index}`}
              href={href}
              className="col-12 py-2 display-1 fw-bolder fontnormal text-light text-uppercase d-xxl-block d-none"
            >
              <motion.p
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                }}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index != index
                    ? "open"
                    : "closed"
                }
              >
                {getChars(title)}
              </motion.p>
            </a>{" "}
            <a
              key={`l_${index}`}
              href={href}
              className="col-12 py-1 display-3 fw-bolder fontnormal text-light text-uppercase d-xxl-none d-block"
            >
              <motion.p
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                }}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index != index
                    ? "open"
                    : "closed"
                }
              >
                {getChars(title)}
              </motion.p>
            </a>
          </>
        );
      })}
    </div>
  );
}
