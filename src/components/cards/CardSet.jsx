import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCalendarAlt,
  faBell,
  faClock,
  faAppleWhole,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Card";

function CardSet() {
  const cardData = [
    {
      icon: faGlobe,
      title: "Timezones",
      text: "Convert time across different zones.",
      link: "/timezone",
    },
    {
      icon: faAppleWhole,
      title: "Pomodoro",
      text: "Boost productivity with timed work sessions.",
      link: "/pomodoro",
    },
    {
      icon: faCalendarAlt,
      title: "Daily Planner",
      text: "Plan your days and weeks to stay organized.",
      link: "/planner",
    },
    {
      icon: faClock,
      title: "World clock",
      text: "Check current time anywhere in the world.",
      link: "/worldclock",
    },
    {
      icon: faBell,
      title: "Timer",
      text: "Set countdowns with alarm for any task.",
      link: "/timer",
    },
    {
      icon: faStopwatch,
      title: "Stopwatch",
      text: "Measure elapsed time precisely.",
      link: "/stopwatch",
    },
  ];
  return (
    <motion.div
      initial={{ marginLeft: "-100px" }}
      animate={{ marginLeft: "0px" }}
      transition={{
        duration: 1.5,
        delay: 0.2,
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
    >
      {cardData.map((card) => (
        // <Link to={card.link} key={card.title}>
        <Card
          icon={
            <FontAwesomeIcon icon={card.icon} className="text-white text-4xl" />
          }
          title={card.title}
          text={card.text}
          key={card.title}
        />
        // </Link>
      ))}
    </motion.div>
  );
}

export default CardSet;
