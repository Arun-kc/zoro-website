import styled from "styled-components";
import { FaNodeJs, FaReact, FaDiscord } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: auto;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: block;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: justify;
  //padding: 0.75rem;
  width: 250px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
export const ReservedStrike = styled.small`
  color: #fff;
  margin-bottom: 16px;
  text-decoration-line: line-through;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const NodeJs = styled(FaNodeJs)`
  color: green;
  transform: scale(1.5);
  margin: 2%;
`;

export const ReactJs = styled(FaReact)`
  color: #61dafb;
  transform: scale(1.5);
  margin: 2%;
`;

export const Discord = styled(FaDiscord)`
  color: #7289da;
  transform: scale(1.5);
  margin: 2%;
`;

export const Love = styled(GiEternalLove)`
  color: red;
  transform: scale(1.5);
  margin: 2%;
`;
