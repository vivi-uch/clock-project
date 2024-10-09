import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardSet from "./components/cards/CardSet";
import Hero from "./components/Hero";
import Listings from "./components/Lists/Listings";
import Pricing from "./components/price/Pricing";
import Bottom from "./components/Bottom";
import TimerPage from "./components/Routes/TimerPage";
import PlannerPage from "./components/Routes/PlannerPage";
import TimezonePage from "./components/Routes/TimezonePage";
import WorldClockPage from "./components/Routes/WorldClockPage";
import PomodoroPage from "./components/Routes/PomodoroPage";
import StopwatchPage from "./components/Routes/StopwatchPage";

import { useState } from "react";

const Home = () => {
  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col items-center gap-20">
      <Hero />
      <CardSet />
      <Listings />
      <Pricing />
      <Bottom />
    </div>
  );
};
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Routes for each module */}
        <Route
          path="/planner"
          element={
            <PlannerPage toggleSidebar={toggleSidebar} isOpen={isOpen} />
          }
        />
        <Route
          path="/timer"
          element={<TimerPage toggleSidebar={toggleSidebar} isOpen={isOpen} />}
        />
        <Route
          path="/timezone"
          element={
            <TimezonePage toggleSidebar={toggleSidebar} isOpen={isOpen} />
          }
        />
        <Route
          path="/pomodoro"
          element={
            <PomodoroPage toggleSidebar={toggleSidebar} isOpen={isOpen} />
          }
        />
        <Route
          path="/worldclock"
          element={
            <WorldClockPage toggleSidebar={toggleSidebar} isOpen={isOpen} />
          }
        />
        <Route
          path="/stopwatch"
          element={
            <StopwatchPage toggleSidebar={toggleSidebar} isOpen={isOpen} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
