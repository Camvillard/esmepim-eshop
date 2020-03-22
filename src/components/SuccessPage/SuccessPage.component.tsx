import React, { Fragment } from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme-variables";
import { AccentContent } from "../PaymentForm/PaymentForm.ui";

const { pink, darkGray } = themeColors;

const SuccessPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${pink};
  padding: 0 8vw;

  p {
    color: ${darkGray};
  }
`;

interface ISuccessPageProps {
  userEmail: string;
  amount: number;
}

const SuccessPage = (props: ISuccessPageProps) => {
  const { userEmail, amount } = props;
  return (
    <SuccessPageContainer>
      <div>
        <h1>merci !</h1>
        <p>
          la commande a bien été passée. On ajoute{" "}
          <AccentContent>{amount} $CAD</AccentContent> au montant total que nous
          reverserons à une association. le livre de recettes sera envoyé très
          vite au <AccentContent>{userEmail}</AccentContent>.
        </p>
        <p>
          si vous ne recevez pas le mail d'ici 24h, vérifiez vos spams, et
          envoyez-nous un petit mot au allo@esmepim.com.
        </p>
      </div>
    </SuccessPageContainer>
  );
};

export default SuccessPage;
