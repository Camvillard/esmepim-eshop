import styled from "styled-components";
import { themeColors, themeFonts } from "../../theme/theme-variables";

const { darkGray } = themeColors;
const { futuraFont, firaFont } = themeFonts;

export const Label = styled.label`
  color: ${darkGray};
  font-family: ${futuraFont};
  font-size: 1.4rem;
  margin-bottom: 4vh;
  @media (min-width: 1024px);
   {
    fint-size: 1.8rem;
  }
`;
