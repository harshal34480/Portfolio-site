import React from "react";
import robolex from "../assets/robolex.jpg";
import ChatApp from "../assets/ChatApp.jpg";
import GuessingGame from "../assets/GuessingGame.jpg";
import LandingPage from "../assets/LandingPage.jpg";
import Resume from "../assets/Resume.jpg";
import ImageReact from "../assets/ImageReact.jpg";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Work
          </p>
          <p className="py-6 "></p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${robolex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Robolex
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshal34480/robo-lex">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ChatApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Chit-Chat App
              </span>
              <div className="pt-8 text-center">
                <a href="https://chit-chat-p961.onrender.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshal34480/Chit-Chat">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GuessingGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Guessing Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://harshal34480.github.io/guessing_game/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshal34480/guessing_game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${LandingPage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href="https://harshal34480.github.io/Landing-Page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshal34480/Landing-Page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            style={{ backgroundImage: `url(${ImageReact})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
          {/* <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          <div
            style={{ backgroundImage: `url(${Resume})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Resume
              </span>
              <div className="pt-8 text-center">
                <a href="https://harshal34480.github.io/resume/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/harshal34480/resume">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
