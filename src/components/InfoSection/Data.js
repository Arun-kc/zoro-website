import img1 from "../../images/zoro1.png";
import contributions from "../../images/contributions.svg";
import commands from '../../images/ss.png';
import fun from '../../images/ss0.png';

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "An Open Source project",
  headline: "A Multipurpose bot ⚔️",
  description: "Zoro is a fun-oriented discord bot with a lot of function whose main objective is to entertain its users",
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
  topLine: "New features coming soon!",
  headline: "Endless fun 🥳",
  description: "A lot of commands to help users to have fun. Never stop playing 😜",
  buttonLabel: "Invite ME",
  imgStart: false,
  //img: require("../../images/zoro3.jfif"),
  img: fun,
  alt: "something about  img",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "commands",
  lightBg: false, //need tochange
  lightText: true,
  lightTextDesc: true,
  topLine: "",
  headline: "Diverse Commands 🛠️",
  description: "Fun | Image manipulation | Social | Utility | Moderation",
  buttonLabel: "Commands List",
  imgStart: true,
  toShow: false, // turn to true when command page is ready
  aShow: false,
  to: "/commands", // show the button when command page is ready
  //img: require("../../images/zoro3.jfif"),
  img: commands,
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
  toShow: false,
  aShow: true,
  to: "https://github.com/Arun-kc/novicebot",
  //img: require("../../images/zoro3.jfif"),
  img: contributions,
  alt: "something about  img",
  dark: false,
  primary: false,
  darkText: true,
};
