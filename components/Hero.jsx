import React, { useEffect } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const explanation =
    "Mostly uses ReactJS-NextJS for building frontend of Websites or WebApplications\n Rarely has to use NodeJS while needs a backend";
  const hireMeButtonText = "Hire Me";
  return (
    <div className="heroSection">
      <div className="fake-header"></div>
      <div className="hero-mid-container">
        <div className="heroIconContainer">
          <a
            className="icon"
            href="https://www.linkedin.com/in/yükselöztürk/"
            target="_blank"
          >
            <Image alt="" src="/linkedin.svg" width="40" height="40" />
          </a>

          <a
            className="icon"
            href="https://twitter.com/ykslztrkk"
            target="_blank"
          >
            <Image alt="" src="/twitter.svg" width="40" height="40" />
          </a>
          <a
            className="icon"
            href="https://github.com/yukselozt"
            target="_blank"
          >
            <Image alt="" src="/github.svg" width="40" height="40" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/ykslztrkkk"
            target="_blank"
          >
            <Image alt="" src="/instagram.svg" width="40" height="40" />
          </a>

          <a
            className="icon"
            href="https://superpeer.com/yuksel"
            target="_blank"
          >
            <Image alt="" src="/superpeer.svg" width="40" height="40" />
          </a>
        </div>
        <div className="hero-main">
          <div className="hero-main-title">
            <span>
              Hey, I'm{" "}
              <Typewriter
                words={[
                  "Yüksel ÖZTÜRK",
                  "Frontend Developer",
                  "Computer Engineer",
                ]}
                loop={true}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>
          <div className="hero-mid">
            <span>{explanation}</span>
          </div>
          <div className="hero-button">
            <button>
              <span>{hireMeButtonText}</span>
            </button>
          </div>
        </div>
        <div className="heroFake"></div>
      </div>
      <div className="hero-scroll-down-container">
        <Image alt="" src="/down.svg" width="40" height="40" />
      </div>
    </div>
  );
};

export default Hero;
