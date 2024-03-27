import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import Intro from "./Components/Intro/Intro"
import About from "./Components/About/About"
import Experience from "./Components//Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
