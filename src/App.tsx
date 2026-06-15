import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-space text-white font-inter min-h-screen">
      <NavBar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
