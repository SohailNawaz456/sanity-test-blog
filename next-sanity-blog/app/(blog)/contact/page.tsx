"use client";

import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="bg-gray-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>
          <p className="mb-6">Feel Free To Contact Me</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🏠</span>
              <div>
                <h3 className="text-sm font-semibold">Address</h3>
                <p>Gulshan E Iqbal Block-10</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📞</span>
              <div>
                <h3 className="text-sm font-semibold">Phone</h3>
                <p>92 334 3586725</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📧</span>
              <div>
                <h3 className="text-sm font-bold">Email</h3>
                <p>sohailmahum8@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
