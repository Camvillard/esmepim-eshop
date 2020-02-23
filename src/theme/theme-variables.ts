const blue = `#74808D`;
const pink = `#DCA5A5`;
const green = `#748F89`;

const lightGray = `#D7D7D7`;
const mediumGray = `#A0A0A1`;
const gray = `#5B5D5F`;
const darkGray = `#222323`;

const firaFont = `'fira-mono', monospace`;
const futuraFont = `'futura-pt', sans-serif`;

// default : 375px - iPhone 8

// iPad
const smScreen = `768px`;
// iPad Pro
const mdScreen = `1024px`;
// iMac
const lgScreen = `1280px`;
// macbook pro
const xlgScreen = `1440px`;
// @media (min-width: ${smScreen}) {
// }

// @media (min-width: ${mdScreen}) {
// }

// @media (min-width: ${lgScreen}) {
// }

export const themeFonts = { firaFont, futuraFont };

export const themeBreakpoints = {
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen
};

export const themeColors = {
  blue,
  pink,
  green,
  lightGray,
  mediumGray,
  gray,
  darkGray
};
