import React from 'react';
import styled from 'styled-components';
import { themeFonts, themeColors } from '../../theme/theme-variables';

const { futuraFont } = themeFonts;
const { darkGray } = themeColors;

const ButtonWrapper = styled.div`
  display: ${(props: IButtonWrapper) => props.display || 'inline-block'};
  text-align: right;

`

const ButtonElement = styled.a`
  font-family: ${futuraFont};
  color: ${darkGray};
  font-size: 1.8rem;
  border-bottom: 2px solid ${darkGray};
  padding-bottom: 4px;
  font-weight: 700;
`

interface IButtonProps {
  href?: string;
  target?: string;
  display?: string;
  content: string;
  onOrderClick: () => void;
}

interface IButtonWrapper  {
  display?:  string;
}

export const Button = (props: IButtonProps) => {
  const {
    href,
    target,
    display,
    content,
    onOrderClick
  } = props;
  return(
    <ButtonWrapper display={display}>
      <ButtonElement
        onClick={onOrderClick}
        href={href || '#'}
        target={target}
      >
        {content}
      </ButtonElement>
    </ButtonWrapper>
  )
}