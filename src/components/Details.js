import React from "react";

import styled from "styled-components";

import img1 from "../assets/img/Pisicina-Phoenix-Cernica-005.jpg";
import img2 from "../assets/img/Pisicina-Phoenix-Cernica-007.jpg";
import bgImg from "../assets/img/img_bg_4.jpg";

const noPaddingForMobile = `@media screen and (max-width: 900px) {
  padding: 0px;  
}`;

const Section = styled.section`
  // padding: 10px 0 10px;
  // ${noPaddingForMobile}
`;

const ScheduleTile = styled.div`
  // background-image: url(${bgImg});
  // font-size: 18px;
  // ${noPaddingForMobile}
`;
const Tile = styled.div`
  // ${noPaddingForMobile}
`;

const Box = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // text-align: center;
  // margin-bottom: 30px;
  // @media screen and (min-width: 900px) {
  //   &:hover {
  //     transform: translateY(-5px) !important;
  //   }
  // }

  // @media (min-width: 992px) {
  //   margin-bottom: 0;
  // }
`;

const Text = styled.p`
  // padding-top: 5%;
  // line-height: 1.58;
  // color: #FFF;
  // margin-bottom: 0;
  // max-width: 350px;
`;

const Details = () => {
  const width = window.innerWidth;
  return (
    <Section id="about">
      <div className="container">
        {/* <SectionTitle>Lorem ipsum dolor sit amet</SectionTitle>
        <SubTitle>Lorem ipsum dolor sit amet</SubTitle> */}
        <div className="row">
          <Tile className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <img src={img2} alt="" style={{ width: "100%" }} />
            </Box>
          </Tile>
          <ScheduleTile className="col-lg-4">
            <Box data-aos="fade-up">
              <Text>
                Va așteptăm cu drag.
                <br />
                <b>Cununia religioasa</b> va avea loc la ora 17:00 pe pajiștea de lângă lac.
                <br />
                <b>Petrecerea</b> va continua pe terasa de la piscină începând cu ora 18:00.
              </Text>
            </Box>
          </ScheduleTile>
          <Tile className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <img src={img1} alt="" style={{ width: "100%" }} />
            </Box>
          </Tile>
        </div>
      </div>
    </Section>
  );
};

export default Details;
