import classes from "../../assets/styles/main-nature.module.css";
import { motion } from "framer-motion";

export default function Nature() {
  return (
    <div
      className={`${classes["hero-image"]} text-center px-[1rem] text-white mt-24 flex flex-col justify-center items-center`}
    >
      <motion.h1
        initial={{ y: -100, opacity: 0.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="font-bold text-6xl"
      >
        Nature in Algeria
      </motion.h1>
      <motion.span
        initial={{ x: -100, opacity: 0.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="font-bold mb-24 text-xl"
      >
        From Desert to endless green forests to vast arctic wilderness, Algerian
        nature is incredibly rich and accessible – even from within city limits.
      </motion.span>
      <a
        href="https://www.tripadvisor.com/Attractions-g293717-Activities-c57-Algeria.html"
        className="px-8 py-4 text-2xl hover:text-green-600 hover:bg-white bg-green-600 text-white transition-all rounded"
      >
        Explore Algerian nature
      </a>
    </div>
  );
}
