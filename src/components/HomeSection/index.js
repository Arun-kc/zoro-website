import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import Image from "../../images/zoro2.png";
import { Button } from "../ButtonElements";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
  HomeImage,
  Container,
  HomeRow,
} from "./HomeElements";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeRow imgStart={true}>
        <Container>
          <HomeImage src={Image}></HomeImage>
        </Container>
        <HomeContent>
          <HomeH1>⚔️ Zoro ⚔️</HomeH1>
          <HomeP>Your next favourite discord entertainer!!🎉</HomeP>
          <HomeBtnWrapper>
            <Button
              href="https://discord.com/api/oauth2/authorize?client_id=831858970401701898&permissions=4278190070&redirect_uri=https%3A%2F%2Fdiscord.gg%2F9GSkAeEzkn&scope=bot"
              target="_blank"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Invite Me {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </HomeContent>
      </HomeRow>
    </HomeContainer>
  );
};

export default HomeSection;
