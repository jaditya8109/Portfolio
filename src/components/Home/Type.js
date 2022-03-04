import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tech Enthusiast",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Shopify Developer",
          "Alexa Skill Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
