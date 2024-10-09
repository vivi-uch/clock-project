import Sidebar from "./Routes/Sidebar";
import DotLoader from "./DotLoader";

function Comingsoon({ name, isOpen, toggleSidebar }) {
  return (
    <div className="bg-black min-h-screen flex  items-center justify-center p-4">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`lg:h-96 h-48 w-full bg-gray-500 rounded flex justify-center items-center flex-col gap-8 ml-16 ${
          isOpen ? "lg:ml-72 lg:mr-8 " : "lg:ml-24 lg:mr-4"
        }`}
      >
        <DotLoader />
        <p className="text-white text-center text-sm  md:text-lg lg:text-4xl font-bold">
          {name}
        </p>
      </div>
    </div>
  );
}

export default Comingsoon;
