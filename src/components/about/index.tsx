import { FaRegLightbulb, FaSplotch, FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  const appTarget = [
    {
      id: 1,
      icon: <FaRegLightbulb className="text-4xl text-amber-600" />,
      title: "Découvert et culture",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-4xl text-amber-600" />,
      title: "Education",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      icon: <FaSplotch className="text-4xl text-amber-600" />,
      title: "Loisir et divertissement",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center p-20 bg-amber-50">
      {/* About introducton */}
      <div className="w-full lg:w-[75%] m-auto flex flex-col justify-center items-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.2,
          }}
          className="text-2xl lg:text-4xl text-amber-600"
        >
          ✨ À propos du projet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.4,
          }}
          className="text-sm"
        >
          <span className="font-semibold">
            Connais-tu réellement Madagascar ?
          </span>
          est un quiz interactif et illustré conçu pour tester vos connaissances
          sur la culture, l'histoire, les traditions et les richesses de
          Madagascar 🇲🇬. Le jeu offre une expérience utilisateur gamifiée avec
          effets sonores, visuels et progression dynamique. Le but de ce jeu est
          de sensibiliser les utilisateurs à la richesse culturelle et
          historique de Madagascar à travers une expérience ludique, éducative
          et interactive.
        </motion.p>
      </div>

      {/* About card */}
      <div className="flex flex-col lg:flex-row gap-2">
        {appTarget.map((t) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ translateY: -10 }}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: t.id * 0.5,
                translateY: { duration: 0.2 },
              }}
              key={t.id}
              className="rounded-2xl shadow-2xl p-4 w-full h-full flex flex-col gap-4 items-center bg-white"
            >
              <div>{t.icon}</div>
              <div>
                <h1 className="text-xl text-amber-600">{t.title}</h1>
                <p className="text-sm py-2">{t.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
