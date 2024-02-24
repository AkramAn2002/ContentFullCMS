import React from "react";
import heroSvg from "./assets/hero.svg";

const Hero = () => {
  return (
    <div className="container1">
      <div className="child1">
        <h1>Content full cms</h1>
        <div className="txt">
          <p>
            Single-origin coffee deep v sus small batch. Gorpcore vape
            lumbersexual normcore four dollar toast drinking vinegar. Twee 90's
            taiyaki small batch bitters, bespoke jianbing leggings marxism
            keytar pabst adaptogen mixtape tumblr stumptown. DSA twee iceland
            tacos swag tote bag. Solarpunk man bun fingerstache retro pinterest.
          </p>
        </div>
      </div>
      <div className="child2">
        <div className="centerImg">
          <img src={heroSvg} alt="aak" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
