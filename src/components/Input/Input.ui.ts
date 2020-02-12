import styled from "styled-components";
import { themeColors, themeFonts } from "../../theme/theme-variables";

const {
  pink,
  blue,
  green,
  lightGray,
  mediumGray,
  gray,
  darkGray
} = themeColors;

const { futuraFont, firaFont } = themeFonts;

interface IInputElementProps {
  bgColor?: string;
}

export const InputComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 8px 0 16px;
`;

export const LabelElement = styled.label`
  color: ${darkGray};
  font-size: 1.4rem;
`;

export const InputElement = styled.input`
  background: ${(props: IInputElementProps) => props.bgColor || "none"};
  border: none;
  border-bottom: 2px solid ${darkGray};
  height: 3.2rem;
  flex-grow: 1;
`;
