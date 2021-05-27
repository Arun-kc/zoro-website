import React from "react";
import { FaNodeJs, FaReact, FaDiscord } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
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
} from "./FooterElements";

const Footer = () => {
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
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us4</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us5</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
