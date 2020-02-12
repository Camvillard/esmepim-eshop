import React, { Fragment } from 'react';
import { InputElement, LabelElement, InputComponent } from './Input.ui';
import { themeColors } from '../../theme/theme-variables';

const {
  pink,
  blue,
  green,
  lightGray,
  mediumGray,
  gray,
  darkGray
} = themeColors;

export const Input = () => {
  return(
    <InputComponent>
      <LabelElement>adresse email :</LabelElement>
      <InputElement />
    </InputComponent>
  )
}