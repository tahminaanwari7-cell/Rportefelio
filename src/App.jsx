
import { Routes, Route } from "react-router";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Resume from "./Pages/Resume.jsx";

export default function App() {
  return (
    <>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>

      <Footer />
    </>
  );
}
