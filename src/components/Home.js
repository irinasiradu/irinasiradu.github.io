import React from "react";

import styled from "styled-components";
import moment from "moment"

import { commonUi } from "../shared/Common.js"
import bgImg from "../assets/img/DSC_0432.JPG";

const Section = styled.section`
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url(${bgImg});
  color: ${commonUi.textColor};
  font-family: ${commonUi.fontFamily};
  
  text-align: center;

  height: 800px;
  @media (max-width: 767px) {
    height: auto
  }

  & .box {
    background-color: rgba(244,244,244, 0.9); 
    height: 100%;
    padding-top: 6%;
    padding-bottom: 25%;
  }

  & .title {  
    font-weight: 300;
    list-style: none;
    
    font-size: 100px;
    @media (max-width: 767px) {
      font-size: 37px;
      display: inline;
    }

    & li{
      display: inline-block;
      @media (max-width: 767px) {
        display: list-item;
      }
    } 

    & .circle {
      background-color: ${commonUi.emphColor}; 
      color: ${commonUi.whiteColor}; 
      
      width: 100px;
      height: 100px;
      border-radius: 100px;
      font-size: 63px;
      top -15px;
      line-height: 1.5em;
      margin: 0px;
      position: relative;
      margin-left: 0.25em;
      margin-right: 0.25em;

      @media (max-width: 767px) {
        width: 64px;
        height: 64px;
        font-size: 41px;
        line-height: 1.5em;
        top: 0px;
        margin: auto;
      }
    }
  }

  & .date {
    font-weight: 300;
    font-size: 50px;

    @media (max-width: 767px) {
      font-size: 30px;
      margin-top: 30px;
    }
  }

  & .other {
    //font-weight: 300;
    font-size: 30px;

    @media (max-width: 767px) {
      font-size: 20px;
      margin-top: 20px;
    }
  }
  
  & a {
    color: ${commonUi.textColor};
    cursor: pointer;
    border-bottom: 1px solid ${commonUi.emphColor};
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="box">
        <ul data-aos="zoom-in" className="title">
          <li>Irina</li>
          <li className="circle">&amp;</li>
          <li>Radu</li>
        </ul>
        <div
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          <span className="date">18 Iulie, 2020</span>
          <br />
          <span className="other">
            <a href="https://www.google.com/maps/place/Piscina+Phoenix+Cernica/@44.4345628,26.2413371,17z/data=!3m1!4b1!4m5!3m4!1s0x40b1fba2a583b05f:0x4afbbc6bd59729d5!8m2!3d44.434559!4d26.2435258">Pheonix Cernica</a>, Pantelimon, IF, Romania
            <br />
            Au mai ramas <b>{moment("2020-07-18").diff(moment(), "day")}</b> zile
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Home;
