import About from "./components/about";
import Education from "./components/education";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Work from "./components/work";

const homepage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div id="home">
        <Hero></Hero>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="resume">
        <div id="education">
          <Education></Education>
        </div>
        <div className="divider divider-primary"></div>
        <div id="work">
          <Work></Work>
        </div>
      </div>
    </div>
  );
};

export default homepage;
