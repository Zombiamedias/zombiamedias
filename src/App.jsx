import React from "react";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projectssection.jsx";
import Aboutmesection from "./components/Aboutme.jsx";
import Futer from "./components/Contactme.jsx";
import Skills from "./components/Skills.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-[#260273] from-10% via-[#4f46e5] via-66% to-[#def244] to-90% ">
      <Navbar />
      <Header />
      <Projects />
      <Skills/>
      <Aboutmesection />
      <Futer />
    </div>
  );
};

export default App;
