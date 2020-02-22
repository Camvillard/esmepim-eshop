import React, { Fragment, useState } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Landing } from './components/Landing/Landing.component';
import { Logo } from './components/Logo/Logo.component';
import { GlobalStyle } from './theme/global-styles';

import { themeColors } from './theme/theme-variables';

import { FullContainer, ContactLine } from './components/Container/Container.ui';
import SuccessPage from './components/SuccessPage/SuccessPage.component';

const {
  pink
} = themeColors

const App = () => {
  const [orderIsInitiated, initiateOrder] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  return (
    <StripeProvider apiKey="pk_test_xEmvkQdoItwgBHiAlYOL9kpo">
        <Elements>
          <FullContainer>
          <GlobalStyle />
          { orderSuccess ?
            <SuccessPage
              userEmail={userEmail}
              amount={amount}
            />
            :
            <Fragment>
              <Landing
                userEmail={userEmail}
                amount={amount}
                setAmount={setAmount}
                orderIsInitiated={orderIsInitiated}
                onOrderClick={() => initiateOrder(true)}
                onEmailInput={(event :any) => setUserEmail(event.target.value)}
                onAmountInputBlur={(event: any) => setAmount(parseInt(event.target.value, 10))}
                orderSuccess={orderSuccess}
                setOrderSuccess={() => setOrderSuccess(true)}
              />
            </Fragment>
          }
          <ContactLine>pour toute question : allo@esmepim.com</ContactLine>
          </FullContainer>
        </Elements>
      </StripeProvider>
  );
}

export default App;
