import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4 ">
      <form
        method="POST"
        action="https://getform.io/f/7cc9545b-a0ba-42ac-9b84-266f7286a0a5"
        className="flex flex-col max-w-[600px] w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            I am always excited to connect with fellow developers, mentors, and
            anyone who shares a love for creating impactful software. If you
            have ideas to discuss or projects to collaborate on, feel free to
            reach out!
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          id="10"
          rows="5"
          placeholder="Message"
          required></textarea>
        <button className="text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
