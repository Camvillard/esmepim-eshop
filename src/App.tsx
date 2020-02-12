import React, { Fragment } from 'react';
import { Landing } from './components/Landing/Landing.component';
import { GlobalStyle } from './theme/global-styles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Landing />
    </Fragment>
  );
}

export default App;
