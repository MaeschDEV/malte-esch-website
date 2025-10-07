import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Work from "./components/work";

const homepage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div id="home" className="pt-16 -mt-16">
        <Hero></Hero>
      </div>
      <div id="about" className="pt-16 -mt-16">
        <About></About>
      </div>
      <div id="education" className="pt-16 -mt-16">
        <Education></Education>
      </div>
      <div className="divider divider-primary"></div>
      <div id="work" className="pt-16 -mt-16">
        <Work></Work>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default homepage;
