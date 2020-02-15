import React from "react";

import styled from "styled-components";

import img1 from "../assets/img/Pisicina-Phoenix-Cernica-008.jpg";
import img2 from "../assets/img/Pisicina-Phoenix-Cernica-007.jpg";

import { style, colors } from "../shared/Common.js"

const Section = styled.section`
  padding-top: 2%;
  padding-bottom: 5%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${colors.lightGrey};
  color: ${colors.grey};
  font-family: ${style.fontFamily};
  overflow: hidden;

  .box {
    padding-left: 15%;
    padding-right: 15%;
    
    @media (max-width: 767px) {
      padding-left: 5%;
      padding-right: 5%;
    }
  }

  .title {
    text-align: center;
    font-size: 50px;
    font-weight: 100;
    
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }

  .card-title {
    font-size: 30px;
    
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  .important {
    color: ${colors.important};
  }

  .card-image {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .card {
    border-radius: 2px;
    padding: 20px 20px 20px 20px;
    position: relative;
    background: ${colors.white};
    border: 2px solid ${colors.grey};
  }

  .card-root {
    margin-top:5%;
    margin-bottom:5%;
  }

  .util {
    font-size: 20px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`;

const TimelineItem = ({ title, imageUrl }) => {
  return (
    <div className="col-md-6 col-sm-12 card-root">
      <div className={"card"}>
        <div className="card-title">
          {title}
        </div>
        <div className="card-body">
          <img src={imageUrl} className="card-image" alt="" />
        </div>
      </div>
    </div>
  )
}

const Details = ({ localization }) => {
  return (
    <Section id="details">
      <div className="box">
        <div className="title">{localization.detailsTitle}</div>
        <div className="row">
          <TimelineItem
            title={localization.ceremonyTitle}
            imageUrl={img1}
          />
          <TimelineItem
            inverted
            title={localization.partyTitle}
            imageUrl={img2}
          />
        </div>
        <div className="row util">
          <div className="col-md-12">
            {localization.helpfulTitle}
            <ul>
              <li>{localization.helpfulOutside}</li>
              <li>{localization.helpfulByDay}</li>
              <li>{localization.helpfulTransport}</li>
              {localization.helpfulAccommodation && (<li>{localization.helpfulAccommodation}</li>)}
              <li>{localization.helpfulContact}</li>
            </ul>
          </div>
        </div>
      </div>
    </Section >
  );
};

export default Details;
