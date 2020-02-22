import React, { Fragment, useState } from "react"
import { PaymentFormElement, UserEmail, PaymentHeader, PaymentGrid, AccentContent } from "./PaymentForm.ui"
import { injectStripe,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  Elements, } from "react-stripe-elements"

import axios from 'axios';
import { themeColors, themeFonts } from "../../theme/theme-variables";
import { Label } from "../Label/Label.ui";
import { Button, FormButton } from "../Button/Button.component";

const { darkGray, mediumGray } = themeColors
const  { futuraFont, firaFont } = themeFonts

interface IPaymentProps {
  userEmail: string;
  amount: number;
  onAmountInputBlur: (event: any) => void;
  setOrderSuccess: () => void;
}

const elementStyles = {
  base: {
    fontWeight: 400,
    fontFamily: firaFont,
    fontSize: '16px',
    fontSmoothing: 'antialiased',
    lineHeight: '24px',
    backgroundColor: 'white',
    color: darkGray,

    '@media (min-width: 1024px)': {
      fontSize: '2rem',
      lineHeight: '40px',
    },
    
    ':focus': {
      color: 'white',
      backgroundColor: darkGray,
    },
    
    '::placeholder': {
      color: mediumGray,
      backgroundColor: 'white',
    },

    ':focus::placeholder': {
      color: '#CFD7DF',
      backgroundColor: darkGray,
    },
  },
  invalid: {
    color: darkGray,
    ':focus': {
      color: 'white',
      backgroundColor: darkGray
    },
    '::placeholder': {
      color: '#FFCCA5',
    },
  },
};

const createOptions = () => {
  return {
    style: elementStyles
  }
}

const handleErrors = ({error}: any) => {
  console.log(error)
}

const Payment = (props: IPaymentProps) =>  {
  const [processOrderStatus, setProcessOrderStatus] = useState(false);
  const {
    userEmail,
    amount  } = props
  return(
    <Fragment>
      <PaymentHeader>
        <UserEmail>
          email : <AccentContent>{userEmail}</AccentContent>
        </UserEmail>
        <UserEmail>
          montant à payer : <AccentContent>{amount} $CAD</AccentContent>
        </UserEmail>
      </PaymentHeader>
      
      <PaymentFormElement
        onSubmit={(e:any) => submitOrder(e,props, setProcessOrderStatus)}
      >
          <Label>
            numéro de carte :
            <CardNumberElement {...createOptions()} onChange={handleErrors} />
          </Label>
          <PaymentGrid>
          <Label>
            code de sécurité :
            <CardCVCElement {...createOptions()} onChange={handleErrors} />
          </Label>

          <Label>
            expiration :
            <CardExpiryElement {...createOptions()} onChange={handleErrors} />
          </Label>

          
        </PaymentGrid>

          <FormButton>
            {processOrderStatus ? 'en attente de paiement' : 'payer la commande'}
          </FormButton>
      </PaymentFormElement>
    </Fragment>
  )
}


const submitOrder = async (e:any, props: any, setProcessOrderStatus: any) => {
  e.preventDefault()
  setProcessOrderStatus(true)
  const { amount, userEmail, setOrderSuccess } = props;
  const baseUrl = process.env.NODE_ENV === 'development' ? `http://localhost:3001/api/v1/orders` : ''
  const chargeToken = await props.stripe.createToken({name: `id : ${userEmail}`})
  const data =  {
    user_email: userEmail,
    amount: amount,
    token: chargeToken.token.id
  }
  await axios({
    url: baseUrl,
    method: 'post',
    headers: {
      'Content-Type': 'Application/json'
    },
    data: {
      order: data
    }
  })
  .then(
    (response: any) => {
      return setOrderSuccess()
    } 
  )
  .catch(error => {
    alert(error)
})
}





export default injectStripe(Payment)