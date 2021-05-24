import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import Image from "../../images/zoro.png";
import { Button } from "../ButtonElement";
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
      <Container>
        <HomeImage src={Image}></HomeImage>
      </Container>
      <HomeContent>
        <HomeH1>Zoro Bot</HomeH1>
        <HomeP>Write something about the bot here</HomeP>
        <HomeBtnWrapper>
          <Button
            to="inviteme"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Invite Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
