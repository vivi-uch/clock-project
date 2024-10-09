import Comingsoon from "../Comingsoon";

function PomodoroPage({ isOpen, toggleSidebar }) {
  return (
    <Comingsoon
      name="PomodoroPage Comingsoon"
      isOpen={isOpen}
      toggleSidebar={toggleSidebar}
    />
  );
}

export default PomodoroPage;
