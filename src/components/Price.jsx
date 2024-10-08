import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const plans = [
  {
    heading: "Personal",
    oldprice: "",
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

const Price = ({ heading, oldprice, Newprice, pointList }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg text-center text-white border-2 border-gray-500 p-4">
      <div className="flex justify-between">
        <h2>{heading}</h2>
        <Button name="Sign Up" />
      </div>
      <p className="text-lg font-light">
        <span className="line-through opacity-10 mr-3">{oldprice}</span>
        <span className="font-bold">{Newprice}</span>
      </p>
      <div>
        {pointList.map((point, index) => (
          <Points key={index} details={point} />
        ))}
      </div>
    </div>
  );
};

const Points = ({ details }) => {
  return (
    <div className="flex gap-2 ">
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
      <p>{details}</p>
    </div>
  );
};

function Pricing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {plans.map((plan) => (
        <Price
          heading={plan.heading}
          key={plan.heading} // Use a unique key here
          oldprice={plan.oldprice}
          Newprice={plan.Newprice}
          pointList={plan.pointList} // Pass the pointList here
        />
      ))}
    </div>
  );
}

export default Pricing;
