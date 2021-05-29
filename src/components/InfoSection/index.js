import React from "react";
import { CommandBtnLink, BtnLinkATag } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Img,
  ImgWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  toShow,
  aShow,
  to,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap show={toShow}>
                  <CommandBtnLink to={to} primary={primary} dark={dark}>
                    {buttonLabel}
                  </CommandBtnLink>
                </BtnWrap>
                <BtnWrap show={aShow}>
                  <BtnLinkATag href={to} target="_blank">
                    {buttonLabel}
                  </BtnLinkATag>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
