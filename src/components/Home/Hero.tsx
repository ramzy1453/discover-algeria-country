import { motion } from "framer-motion";
import classes from "../../assets/styles/main-hero.module.css";

export default function Hero() {
  return (
    <div className={classes["hero-image"]} id="main">
      <div className="text-white flex flex-col justify-center items-center h-full">
        <motion.h1
          initial={{ y: -100, opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-bold text-5xl mb-6 text-center p-8"
        >
          Destinations in Algeria
        </motion.h1>
        <motion.span
          initial={{ x: -100, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-center text-xl p-8"
        >
          Algerian regions and distinct seasons offer seemingly endless things
          to do and see.
        </motion.span>
      </div>
    </div>
  );
}
