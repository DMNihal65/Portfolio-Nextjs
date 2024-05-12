import React from "react";
import { Meteors } from "../ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className=" w-full relative max-w-8xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Central Manufacturing Technology Institute, Bangalore
          </h1>
          <p className="font-normal text-base text-slate-500 mb-1 relative z-50">
            Full Stack Developer & Tech Lead | March 2024 - Present
          </p>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            <ul className="list-disc list-inside">
              <li>
                Led a team of 6 developers for a crucial project with Toyota,
                overseeing the development of a comprehensive machine
                maintenance and predictive maintenance application for Toyota's
                engine manufacturing plant.
              </li>
              <li>
                Developed the full-stack application using Vue.js for the
                frontend, FastAPI and Python for the backend, Postgres for
                database management, and Tailwind CSS for styling, ensuring
                seamless functionality and user experience.
              </li>
              <li>
                Implemented advanced features like real-time monitoring,
                predictive maintenance alerts, and performance analytics,
                resulting in a 25% reduction in downtime and a 30% increase in
                operational efficiency across the plant.
              </li>
            </ul>
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
