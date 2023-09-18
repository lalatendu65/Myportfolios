import { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Experience from "./components/About/Experience";
import ContactMe from "./components/About/ContactMe";
import { routes } from "./constants/routes";
import "./style.css"
import "./App.css"

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.resume} element={<Resume />} />
          <Route path={routes.experience} element={<Experience />} />
          <Route path={routes.contactMe} element={<ContactMe />} />
          <Route path={routes.notFound} element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
