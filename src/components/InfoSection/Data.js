import img1 from "../../images/zoro1.png";
import contributions from "../../images/contributions.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "TopLine data",
  headline: "SOme headline",
  description: "Come up with something",
  buttonLabel: "Invite ME",
  imgStart: true,
  //img: require("../../images/zoro3.jfif"),
  img: img1,
  alt: "something about  img",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "features",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "TopLine data",
  headline: "SOme headline",
  description: "Come up with something",
  buttonLabel: "Invite ME",
  imgStart: false,
  //img: require("../../images/zoro3.jfif"),
  img: img1,
  alt: "something about  img",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "commands",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "TopLine data",
  headline: "SOme headline",
  description: "Come up with something",
  buttonLabel: "Invite ME",
  imgStart: true,
  //img: require("../../images/zoro3.jfif"),
  img: img1,
  alt: "something about  img",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjFour = {
  id: "contribution",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Like this project?",
  headline: "Let's Make Zoro Cool!!",
  description: `All sorts of contributions are welcome, even if its a typo you are welcome to contribute`,
  buttonLabel: "Start Contributing",
  imgStart: false,
  //img: require("../../images/zoro3.jfif"),
  img: contributions,
  alt: "something about  img",
  dark: false,
  primary: false,
  darkText: true,
};
