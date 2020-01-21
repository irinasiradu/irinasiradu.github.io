import React from "react";

import styled from "styled-components";

// import bgImg from "../assets/img/bg-home.jpg";
// background-image: url(${bgImg});

const Section = styled.section`
  position: relative;
  padding-top: 138px;
  padding-bottom: 288px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &:after,
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1px;
    border-bottom: 10px solid #fff;
    z-index: 2;
  }

  &:before {
    left: 0;
    border-right: 12px solid transparent;
    border-left: calc(50vw - 12px) solid #fff;
  }

  &:after {
    right: 0;
    border-left: 12px solid transparent;
    border-right: calc(50vw - 12px) solid #fff;
  }

  @media (min-width: 992px) {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 13vh;
    padding-bottom: 13vh;
  }

  .container {
    font-family: Nunito Sans;
    //font-family: 'Dancing Script', cursive;
    & h1 {  
      font-size: 48px;
      font-weight: 700;
    }
    & h5 {  
      font-size: 18px;
      font-weight: 500;
    }
    & a {
      //color: #1B0E1B;
      color: #fff;
      text-decoration: underline;
    }
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

const BgOverlay = styled.div`
  background: linear-gradient(33deg, #293b51, #7B719D);
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg,  #293b51, #7B719D);
  }
`;

const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 49px;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <BgOverlay />
      <div className="container">
        <HomeTitle data-aos="zoom-in">
          Irina &amp; Radu
        </HomeTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          18 Iulie, 2020
          <br />
          <a href="https://www.phoenixcernica.ro/">Pheonix Cernica</a>, Pantelimon, IF, Romania
          <br />
          179 Days To Go!
        </SubTitle>
      </div>
    </Section>
  );
};

export default Home;
