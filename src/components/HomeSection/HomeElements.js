import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 780px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const HomeContent = styled.div`
  z-index: 3;
  margin-left: auto;
  margin-bottom: auto;
  grid-area: col2;
  // background: rgba(76, 175, 80, 0.3);
  max-width: 1200px;
  position: absolute;
  padding: 250px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomeP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

// export const HomeCol = styled.col`
//   margin-top: 15px;
//   margin-bottom: 15px;
//   padding-right: 15px;
//   padding-left: 15px;
//   flex: 1;
//   max-width: 47%;
//   flex-basis: 50%;
// `;

export const HomeImage = styled.img`
  /* width: auto;
  height: auto;
  margin: auto; */
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  transform: translatey(0px);
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

export const Container = styled.div`
  z-index: 3;
  grid-area: col1;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  justify-content: center;
  margin: ${(size, width = 1440) => `${(size / width) * 100}vw`};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
