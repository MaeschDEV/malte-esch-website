import { Metadata } from "next";
import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
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
      <div className="divider divider-primary"></div>
      <div id="projects" className="pt-16 -mt-16">
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Malte Esch - resume",
  description:
    "Resume of Malte Esch, dual student business informatics at SAP Germany.",
  openGraph: {
    title: "Malte Esch - resume",
    description:
      "Resume of Malte Esch, dual student business informatics at SAP Germany.",
    url: "https://malte-esch.de",
    siteName: "Malte Esch",
    images: [
      {
        url: "/avatar.webp",
        width: 720,
        height: 720,
        alt: "Malte Esch",
      },
      {
        url: "/background.webp",
        width: 2560,
        height: 1928,
        alt: "Background",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default homepage;
