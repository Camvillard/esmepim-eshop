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
`;

export const LandingHeader = styled.div`
  margin-bottom: 4vh;
  padding: 0 24px;
`;

export const LandingText = styled.p`
  // margin-top: -62px;
  // padding: 0 24px;
`;

export const LandingCTAContainer = styled.div`
  background: ${pink};
  padding: 24px 24px 120px;
`;

export const LandingSubtitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
`;
