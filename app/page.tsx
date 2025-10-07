import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const homepage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div id="home" className="pt-16">
        <Hero></Hero>
      </div>
      <div id="about">
        <About></About>
      </div>
    </div>
  );
};

export default homepage;
