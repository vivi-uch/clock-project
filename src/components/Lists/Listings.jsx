import {
  faGlobe,
  faCalendarAlt,
  faStopwatch,
  faClock,
  faBell,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import List from "./List";
import { motion } from "framer-motion";

const Listings = () => {
  const items = [
    {
      icon: faGlobe,
      header: "Timezones for Teams and Individuals",
      text: "Compare timezones globally. Save favorites. Collaborate with team members. DST-aware.",
    },
    {
      icon: faCalendarAlt,
      header: "Support for Workspaces and Projects",
      text: "Organize your tasks and projects in workspaces. Use Pomodoros and Daily Planner on your tasks.",
    },
    {
      icon: faBell,
      header: "Stay productive with Pomodoros",
      text: "Customizable work/break intervals. Track productivity. Notifications and alerts.",
    },
    {
      icon: faClock,
      header: "Plan your days with daily planner",
      text: "Manage tasks and schedules. Recurring tasks. Quick entry. Pomodoro integration.",
    },
    {
      icon: faStopwatch,
      header: "Timer to set countdowns and alarms",
      text: "Set countdowns for any activity. Sound alerts and notifications.",
    },
    {
      icon: faStopwatch,
      header: "Stopwatch to track activities",
      text: "Track elapsed time. Start, stop, and reset functionality.",
    },
    {
      icon: faPlus,
      header: "More tools coming soon",
      text: "Additional time and productivity tools in development.",
    },
  ];

  return (
    <motion.div
      initial={{ marginLeft: "-100px" }}
      animate={{ marginLeft: "45px" }}
      transition={{
        duration: 1.6,
        delay: 0.3,
      }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-7 mx-2 sm:mx-0 lg:mx-11"
    >
      {items.map((item) => (
        <List
          icon={item.icon}
          header={item.header}
          text={item.text}
          key={item.icon}
        />
      ))}
    </motion.div>
  );
};

export default Listings;
