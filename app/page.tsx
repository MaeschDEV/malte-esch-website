import About from "./components/about";
import Education from "./components/education";
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
      <div id="education">
        <Education></Education>
      </div>
    </div>
  );
};

export default homepage;
