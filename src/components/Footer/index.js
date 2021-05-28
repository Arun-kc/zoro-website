import React from "react";
import { FaNodeJs, FaReact, FaDiscord, FaGithub } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  NodeJs,
  ReactJs,
  Discord,
  Love,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ReservedStrike,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Made with{" "}
                <Love>
                  <GiEternalLove />
                </Love>{" "}
                by <FooterLink to="">blacksheep</FooterLink>
              </FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Join us on{" "}
                <Discord>
                  <FaDiscord />
                </Discord>{" "}
                <FooterLink
                  href="https://discord.gg/9GSkAeEzkn"
                  target="_blank"
                >
                  Discord
                </FooterLink>
              </FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Powered by{" "}
                <FooterLink href="https://nodejs.org/en/" target="_blank">
                  <NodeJs>
                    <FaNodeJs />
                  </NodeJs>
                  Node.js{", "}
                </FooterLink>
                <FooterLink href="https://reactjs.org/" target="_blank">
                  <ReactJs>
                    <FaReact />
                  </ReactJs>
                  ReactJS
                </FooterLink>{" "}
                {/* <FooterLink href="https://discord.js.org/#/">
                  Discord.js
                </FooterLink> */}
              </FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Zoro
            </SocialLogo>
            <WebsiteRights>
              zoro ©️ {new Date().getFullYear()}
              <ReservedStrike>{" All rights reserved "}</ReservedStrike>
              {" Its OpenSource!!!"}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/Arun-kc/zoro-website"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://discord.gg/9GSkAeEzkn"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
