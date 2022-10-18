import { motion, useScroll, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import StaticNavbar from "./StaticNavbar";

type Props = {};

export default function Navbar(props: Props) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < scrollY.getPrevious()) {
        setHidden(false);
      } else if (latest > 100 && latest > scrollY.getPrevious()) {
        setHidden(true);
      }
    });
  });

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="sticky top-0 z-10 bg-white text-gray-900 shadow-md py-2 px-2"
    >
      <StaticNavbar />
    </motion.nav>
  );
}

const variants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
};
