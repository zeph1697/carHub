"use client";

import React from "react";

import { CustomButton } from "@components";

const ScrollTop = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <CustomButton
        title=""
        containerStyles="absolute bottom-5 right-10 bg-gray-300 hover:bg-primary-blue rounded-xl -rotate-90"
        rightIcon="/right-arrow.svg"
        handleClick={handleScroll}
      />
    </div>
  );
};

export default ScrollTop;
