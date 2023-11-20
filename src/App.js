import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
