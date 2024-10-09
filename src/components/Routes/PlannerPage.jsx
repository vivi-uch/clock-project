import Comingsoon from "../Comingsoon";

function PlannerPage({ isOpen, toggleSidebar }) {
  return (
    <Comingsoon
      name="PlannerPage Comingsoon"
      isOpen={isOpen}
      toggleSidebar={toggleSidebar}
    />
  );
}

export default PlannerPage;
