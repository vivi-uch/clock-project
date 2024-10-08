import CardSet from "./components/cards/CardSet";
import Hero from "./components/Hero";
import Listings from "./components/Lists/Listings";
import Pricing from "./components/price/Pricing";
import Bottom from "./components/Bottom";

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
  return <Home />;
}

export default App;
