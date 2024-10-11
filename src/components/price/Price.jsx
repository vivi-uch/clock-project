import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const Price = ({ heading, oldprice, Newprice, pointList }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg text-center text-white border-2 border-gray-500 p-4 hover:scale-105">
      <div className="flex justify-between items-center">
        <h2>{heading}</h2>
        <Button name="Sign Up" />
      </div>
      <p className="text-lg font-light text-start">
        <span className="line-through opacity-45 mr-3">{oldprice}</span>
        <span className="font-bold">{Newprice}</span>
      </p>
      <div className="flex flex-col gap-4">
        {pointList.map((point, index) => (
          <Points key={index} details={point} />
        ))}
      </div>
    </div>
  );
};

export default Price;

const Points = ({ details }) => {
  return (
    <div className="flex gap-2">
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
      <p>{details}</p>
    </div>
  );
};
