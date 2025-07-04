import React from "react";

import profileImage from "../../assets/jitu_profile.jpg";
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[17vw] font-sans mt-8 md:mt-12 lg:mt-15"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Jitendra Singh
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Web Developer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-[#8245ec]"

            />
          </h3>
           {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate frontend developer with 1+ year of experience in building responsive,
             user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React, and 
             prefer Vite for efficient project setups. I also work with UI frameworks like Bootstrap,
              MUI, and Tailwind CSS to create modern interfaces. Additionally, I have basic knowledge
               of backend technologies like Core Java and MySQL.
          </p>
           {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/15GXrcVdT4HnMP7mxcwDz7MMzx7I32saf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
  <Tilt
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] rounded-full shadow-2xl"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    perspective={1200}
    scale={1.08}
    transitionSpeed={800}
    gyroscope={true}
  >
    <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-purple-600 shadow-lg hover:shadow-purple-400 transition-shadow duration-500">
      <img
        src={profileImage}
        alt="Jitendra Singh"
        className="w-full h-full object-cover"
      />
    </div>
  </Tilt>
</div>
      </div>
    </section>
  );
};

export default About;
