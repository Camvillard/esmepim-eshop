import styled from "styled-components";
import { themeColors } from "../../theme/theme-variables";

const { pink } = themeColors;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  height: 100vh;
  width: 100vw;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const LandingHeader = styled.div`
  position: relative;
  z-index: 3;
  margin-bottom: 4vh;
  padding: 0 24px;
  @media (min-width: 1024px) {
    width: 62%;
    padding-bottom: 12vh;
    margin-bottom: 0;
  }
`;

export const LandingText = styled.p`
  // margin-top: -62px;
  // padding: 0 24px;
`;

export const LandingCTAContainer = styled.div`
  background: ${pink};
  padding: 24px 24px 48px;
  @media (min-width: 1024px) {
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 12vh;
  }
`;

export const LandingSubtitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
`;
