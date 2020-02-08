import React, { Fragment } from "react";

import styled from "styled-components";

import img1 from "../assets/img/Pisicina-Phoenix-Cernica-007.jpg";
import img2 from "../assets/img/Pisicina-Phoenix-Cernica-005.jpg";

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
    max-width: 100%;
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
`;

const CeremonyTitle = () => {
  return (
    <div style={{ display: "block", textAlign: "right" }}>
      <span className="important">Cununia religioasa</span> va avea loc la ora <span className="important">17:00</span> pe pajiștea de lângă lac.
    </div>);
}

const PartyTitle = () => {
  return (
    <Fragment>
      <span className="important">Petrecerea</span> va continua pe terasa de la piscină începând cu ora <span className="important">18:00</span>.
    </Fragment>);
}

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

const Details = () => {
  return (
    <Section id="details">
      <div className="box">
        <div className="title">Va așteptăm cu drag</div>
        <div className="row">
          <TimelineItem
            title={<CeremonyTitle />}
            imageUrl={img1}
          />
          <TimelineItem
            inverted
            title={<PartyTitle />}
            imageUrl={img2}
          />
        </div>
      </div>
    </Section >
  );
};

export default Details;
