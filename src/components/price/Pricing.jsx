import { motion } from "framer-motion";
import Price from "./Price";

function Pricing() {
  const plans = [
    {
      heading: "Personal",
      Newprice: "Free",
      pointList: [
        "Unlimited Individual Timezones",
        "Team Timezones (up to 3)",
        "1 Workspace and Project",
        "Pomodoro Timer",
        "Daily Planner (7 days history)",
        "7 tasks per day",
        "Focus Sounds",
        "World Clock, Timer, Stopwatch",
      ],
    },
    {
      heading: "Professional",
      oldprice: "$9.99",
      Newprice: "$5.99/mo",
      pointList: [
        "All the basic features",
        "Team Timezones (up to 10)",
        "Unlimited Workspaces & Projects",
        "Advanced Pomodoro Timer",
        "Daily Planner (Unlimited History)",
        "Unlimited tasks",
        "Early access to new features",
        "Support the development",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ marginLeft: "-100px" }}
      animate={{ marginLeft: "0px" }}
      transition={{
        duration: 1.8,
        delay: 0.4,
      }}
      className="flex flex-col items-center gap-8 text-white w-screen"
    >
      <h2 className="flex items-center font-bold text-xl">
        <span className="text-gray-700 mr-5 text-4xl ">-</span>
        Pricing
        <span className="text-gray-700 ml-5 text-4xl ">-</span>
      </h2>

      <p className="lg:max-w-md text-gray-500 text-center">
        Keep using the app for free. Upgrade anytime to support the development,
        and unlock additional features.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:space-x-8">
        {plans.map((plan) => (
          <Price
            heading={plan.heading}
            key={plan.heading}
            oldprice={plan.oldprice}
            Newprice={plan.Newprice}
            pointList={plan.pointList}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Pricing;
