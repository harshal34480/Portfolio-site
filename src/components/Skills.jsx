import React from "react";
import Css from "../assets/Css.png";
import Github from "../assets/Github.png";
import html from "../assets/html.png";
import Javascript from "../assets/JavaScript.png";
import ReactLogo from "../assets/ReactLogo.png";
import Nodejs from "../assets/Nodejs.png";
import Tailwind from "../assets/Tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="html icon" className="w-28  mx-auto" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Css} alt="css icon" className="w-28 mx-auto" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="Github icon" className="w-28 mx-auto" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Javascript}
              alt="javascript icon"
              className="w-28 mx-auto"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactLogo} alt="react icon" className="w-28 mx-auto" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Nodejs} alt="react icon" className="w-28 mx-auto" />
            <p className="my-4">NODEJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="tailwind icon" className="w-28 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
