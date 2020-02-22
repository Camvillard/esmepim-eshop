import React, { Fragment } from 'react';
import { InputElement, LabelElement, InputComponent } from './Input.ui';
// import { themeColors } from '../../theme/theme-variables';
import { IInputProps } from './Input.type';

// const {
//   pink,
//   blue,
//   green,
//   lightGray,
//   mediumGray,
//   gray,
//   darkGray
// } = themeColors;

export const Input = (props: IInputProps) => {
  const {
    onInputBlur,
    placeholder,
    label
  } = props;
  return(
    <InputComponent>
      <LabelElement>{label}</LabelElement>
      <InputElement
        onBlur={onInputBlur}
        placeholder={placeholder}
      />
    </InputComponent>
  )
}