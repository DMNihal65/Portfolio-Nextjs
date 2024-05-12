import React from "react";
import { Meteors } from "../ui/meteors";

export function MeteorsDemoWebDesignIntern() {
  return (
    <div className="">
      <div className=" w-full relative max-w-2xl">
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
            Comp-Soft Technology
          </h1>
          <p className="font-normal text-base text-slate-500 mb-1 relative z-50">
            Web Design Intern | May 2022 - June 2022
          </p>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            <ul className="list-disc list-inside">
              <li>
                Web Development Intern at Comp-Soft Technology, contributing
                to a meaningful project supporting an NGO’s green initiative.
              </li>
              <li>
                Responsible for developing a website connecting plant and
                nature enthusiasts, enabling them to exchange, sell, or donate
                plants and seeds.
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
