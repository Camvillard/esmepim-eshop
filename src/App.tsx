import React, { Fragment, useState } from 'react';
import { Landing } from './components/Landing/Landing.component';
import { GlobalStyle } from './theme/global-styles';

const App = () => {
  const [orderIsInitiated, initiateOrder] = useState(false);
  console.log('wergh', orderIsInitiated)
  return (
    <Fragment>
      <GlobalStyle />
      {orderIsInitiated ? 
        <div>to do</div> :
        <Landing
          onOrderClick={() => initiateOrder(true)}/>
      }
      
    </Fragment>
  );
}

export default App;
