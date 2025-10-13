import "./hero.css";
import {
  FaStar,
  FaRegCirclePlay,
  FaPersonCircleQuestion,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="rounded-ful text-xl px-3 py-1 flex gap-1 items-center"
      >
        <FaStar className="text-amber-300" />{" "}
        <FaStar className="text-amber-300" /> Gasikarako{" "}
        <FaStar className="text-amber-300" />{" "}
        <FaStar className="text-amber-300" />{" "}
      </motion.div>
      <div className="flex flex-col gap-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            className="text-2xl lg:text-5xl"
          >
            Connais-tu{" "}
            <span className="text-amber-600 font-semibold">Madagascar</span> ?
          </motion.h1>
        </div>
        <div className="w-full lg:w-[75%] m-auto">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.6,
            }}
            className="text-sm"
          >
            Evaluer votre culture malgache et votre connaisance avec un quiz
            fun, instructif et ultra stylé ! Découvrer des nouvelles actualités
            de notre pays 🇲🇬
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-2 items-center ">
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.8,
            }}
            href="/commencer-un-quiz"
            className="rounded-full px-4 py-3 lg:px-10 lg:py-4 bg-amber-600 text-light flex items-center gap-1"
          >
            <FaRegCirclePlay />
            Démarrer une partie
          </motion.a>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.8,
            }}
            className="rounded-full px-4 py-3 lg:px-10 lg:py-4 bg-white text-gray-700 flex items-center gap-1"
          >
            <FaPersonCircleQuestion />
            Comment jouer ?
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
