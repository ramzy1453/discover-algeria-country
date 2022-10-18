import { motion, Variants } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
type Props = {
  location: string;
  duration: string;
};

export default function InspirationFooter(props: Props) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex space-x-8 overflow-hidden mt-[-30px]"
    >
      <div className="flex items-center">
        <FiMapPin size={30} />
        <div className="ml-2 text-lg">{props.location}</div>
      </div>
      <div className="flex items-center">
        <BiTime size={30} />
        <div className="ml-2 text-lg">{props.duration}</div>
      </div>
    </motion.div>
  );
}

const variants: Variants = {
  initial: { y: 20 },
  animate: { y: 0 },
  exit: { y: 80 },
};
