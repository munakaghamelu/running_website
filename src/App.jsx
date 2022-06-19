import Topbar from "./components/topbar/Topbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Run from "./components/run/Run";
import Milestones from "./components/milestones/Milestones";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Landing/>
        <About/>
        <Run/>
        <Milestones/>
        <Contact/>
      </div>
      <Footer />
    </div>
  );
}

export default App;