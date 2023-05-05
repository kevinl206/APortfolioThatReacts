import React from "react";

export default function Portfolio() {
    return (

        <div title="Portfolio">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded p-4">
            <img
              src="src/components/assets/noPicture.png"
              alt="App 1"
              className="mb-2"/>
            <h3 className="text-lg font-medium mb-2">App 1</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-between">
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                View App
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 font-medium">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  