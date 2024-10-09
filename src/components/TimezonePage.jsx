import DotLoader from "./DotLoader";
import Sidebar from "./Sidebar";

function TimezonePage({ isOpen, toggleSidebar }) {
  return (
    <div className="bg-black min-h-screen flex  items-center justify-center p-4">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`h-96 w-full bg-gray-500 rounded  flex justify-center items-center flex-col gap-8 ${
          isOpen ? "ml-72 mr-8" : "ml-24 mr-4"
        }`}
      >
        <DotLoader />
        <p className="text-white text-4xl font-bold">Coming Soon</p>
      </div>
    </div>
  );
}

export default TimezonePage;
