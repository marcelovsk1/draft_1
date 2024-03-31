import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <meta property="og:title" content="Marcelo Amaral - DEV" />
        <meta property="og:description" content="iOS/Fullstack Developer" />
        <meta property="og:image" content="/Users/marcelovsk1/Desktop/backup-portfolio/backup-portfolio/src/img/logo512.png" />
        <meta property="og:url" content="https://marceloaa.dev" />
        <meta property="og:type" content="website" />
      </Helmet>
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
