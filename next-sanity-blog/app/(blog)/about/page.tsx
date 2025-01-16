
'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,  
      delay: 200,   
      duration: 1500,  
      easing: 'ease-in-out', 
      once: false,  
      mirror: true, 
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="md:w-1/2" data-aos="fade-right">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Blog</h1>
          <p className="text-gray-600">
            Welcome to our blog! Here, we share insights, stories, and tips about various topics that matter to you. Our goal is to provide valuable content that not only informs but also inspires our readers to explore new ideas and perspectives.
          </p>
          <p className="mt-4 text-gray-600">
            Whether you are looking for practical advice, in-depth analyses, or just a place to discover something new, our blog is designed to cater to your interests. Thank you for visiting, and we hope you enjoy your time here!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src="/images/user.jpeg"
            alt="User"
            className="w-64 h-64 rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
