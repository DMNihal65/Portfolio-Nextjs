"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Card } from "./Card";

// Initialize Swiper core modules
SwiperCore.use([Navigation]);

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageUrl: "/images/project1.jpg",
    seeMoreLabel: "See more details",
    addToCartLabel: "Add to cart",
  },
  // Add more project data as needed
];

export function Projects() {
  return (
    <div className="flex justify-center">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        className="mySwiper"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
