import Hero from "../components/Home/Hero";
import Regions from "../components/Home/Regions";
import Destinations from "../components/Home/Destinations";
import Inspirations from "../components/Home/Inspirations";
import Nature from "../components/Home/Nature";
import About from "../components/Home/About";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="px-16">
        <Regions />
        <Destinations />
        <Inspirations />
      </div>
      <Nature />
      <div className="px-16">
        <About />
      </div>
    </>
  );
};

export default Home;
