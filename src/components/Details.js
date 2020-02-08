import React, { Fragment } from "react";

import styled from "styled-components";

import img1 from "../assets/img/Pisicina-Phoenix-Cernica-005.jpg";
import img2 from "../assets/img/Pisicina-Phoenix-Cernica-007.jpg";
import { style, colors } from "../shared/Common.js"

const Section = styled.section`
  padding-top: 5%;
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
  }

  .title {
    padding-bottom: 5%;
    text-align: center;
    font-size: 50px;
    font-weight: 100;
  }

  & ul {
    display: block;
  }

  .timeline-pill {
    background-color: ${colors.important};
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
  }

  .timeline-card-title {
    font-size: 30px;
  }

  .important {
    color: ${colors.important};
  }

  .timeline-card-image {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  .timeline {
    float: left;
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
    display: grid;
    width: 100%;

    &:before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: " ";
      width: 3px;
      background-color: ${colors.grey};
      left: 50%;
      margin-left: -1.5px;
    }

    & li {
      display: list-item;
      margin-top: -25%;
      margin-bottom: 20px;
      position: relative;

      &:first-child {
        margin-top: -27px;

        .timeline-pill {
          position: absolute;
          top: 33px;
          left: 49%;
        }
      }
    }
    
    .timeline-card {
      width: 46%;
      border-radius: 2px;
      padding: 20px 20px 20px 20px;
      position: relative;
      background: ${colors.white};
      border: 2px solid ${colors.grey};

      &:before {
        position: absolute;
        top: 24px;
        right: -18px;
        display: inline-block;
        border-top: 17px solid ${colors.lightGrey};
        border-left: 17px solid ${colors.grey};
        border-right: 0 solid ${colors.grey};
        border-bottom: 18px solid ${colors.lightGrey};
        content: " ";
    }
  }
  
  .timeline > li.timeline-inverted {
    margin-left: 50%;
  }

  .timeline > li > .timeline-card {
    float: left;
  }

  .timeline > li.timeline-inverted > .timeline-card {
    float: right;

    &:before {
      position: absolute;
      top: 24px;
      right: 18px;
      display: inline-block;
      border-top: 17px solid ${colors.lightGrey};
      border-left: 17px solid ${colors.grey};
      border-right: 0 solid ${colors.grey};
      border-bottom: 18px solid ${colors.lightGrey};
      content: " ";
    }
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

const TimelineItem = ({ inverted, title, imageUrl }) => {
  const rootClass = inverted ? "timeline-inverted" : "";
  return (
    <li className={rootClass}>
      <div className="timeline-pill"></div>
      <div className={"timeline-card"}>
        <div className="timeline-card-title">
          {title}
        </div>
        <div className="timeline-card-body">
          <img src={imageUrl} className="timeline-card-image" alt="" />
        </div>
      </div>
    </li>
  )
}

const Details = () => {
  return (
    <Section id="details">
      <div className="box">
        <div className="title">Va așteptăm cu drag</div>
        <div>
          <ul className="timeline">
            <TimelineItem
              title={<CeremonyTitle />}
              imageUrl={img1}
            />
            <TimelineItem
              inverted
              title={<PartyTitle />}
              imageUrl={img2}
            />
          </ul>
        </div>
      </div>
    </Section >
  );
};

export default Details;
