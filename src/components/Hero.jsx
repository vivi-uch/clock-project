import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function Hero() {
  return (
    <motion.div
      initial={{ marginLeft: "-100px" }}
      animate={{ marginLeft: "0px" }}
      transition={{
        duration: 1.3,
        delay: 0.1,
      }}
      className="flex flex-col gap-5 text-center text-white"
    >
      <motion.div
        animate={{
          rotate: "360deg",
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <FontAwesomeIcon icon={faClock} className="text-gray-600 text-6xl" />
      </motion.div>
      <p className=" text-4xl font-bold">ClockWise 🔁</p>
      <p className="">
        Time related tools to help you stay productive and organized
      </p>
      <Button name="Start App" />
      <em className="text-gray-200">No sign in required</em>
    </motion.div>
  );
}

export default Hero;
