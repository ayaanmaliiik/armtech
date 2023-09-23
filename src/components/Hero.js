import React from "react";
import styled from "styled-components";
import thumbnail from "./images/image2.jpg";

const HeroContainer = styled.section`
  background-image: url(${thumbnail});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding: 5rem 0;
  color: #fff;

  h1{
    font-size:3rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 pt-5">
            <h1 className="py-4">
              Welcome To Arm<span className="text-danger text-bold">Tech</span>
            </h1>
            <h2 className="pt-5">About Me</h2>
            <h2 className="pb-5">A perfect website for <span className="text-danger text-bold">Full Stack Web Developer</span></h2>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
