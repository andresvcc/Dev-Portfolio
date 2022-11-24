import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Web Developer",
          "Mobile Developer",
          "UX designer",
          "Back-End Microservices Developer",
          "Information Systems Designer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
