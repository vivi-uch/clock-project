import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faAppleWhole,
  faClock,
  faStopwatch,
  faBars,
  faTimes,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarItems = [
    { text: "Timezones", icon: faGlobe, link: "/timezone" },
    { text: "Pomodoro", icon: faAppleWhole, link: "/pomodoro" },
    { text: "World Clock", icon: faClock, link: "/worldclock" },
    { text: "Stopwatch", icon: faStopwatch, link: "/stopwatch" },
    { text: "Home", icon: faHomeAlt, link: "/" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-10 transition-all duration-400 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        className={`absolute top-4 right-4 text-2xl hover:scale-125 ${
          isOpen ? "" : "right-5"
        }`}
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      <nav className="mt-16 flex flex-col items-start px-5 gap-5">
        {sidebarItems.map((item) => (
          <Link
            to={item.link}
            key={item.text}
            className={`flex items-center gap-2 text-start hover:scale-125
            `}
            // ${ isOpen ? "justify-start" : "hidden"}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-gray-500 text-2xl"
              // ${!isOpen ? "hidden" : "block"}
            />
            <span className={`${isOpen ? "flex" : "hidden"}`}>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
