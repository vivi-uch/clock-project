import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List({ icon, header, text }) {
  return (
    <div className="flex gap-4 items-baseline text-white ">
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-lg">{header}</h2>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default List;
