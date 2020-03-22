import React, { Fragment, Component } from "react";

import { Input } from "../Input/Input.component";
import { Logo } from "../Logo/Logo.component";
import { themeColors } from "../../theme/theme-variables";
import {
  LandingText,
  LandingContainer,
  LandingCTAContainer,
  LandingHeader,
  LandingSubtitle
} from "./Landing.ui";
import { Button } from "../Button/Button.component";
import { ILandingProps, ILandingState } from "./Landing.type";
import { validateEmail } from "../../helpers/email.helper";

import Payment from "../PaymentForm/PaymentForm.component";
import { ContactLine } from "../Container/Container.ui";

const { pink } = themeColors;

export class Landing extends Component<ILandingProps, ILandingState> {
  public render() {
    return (
      <Fragment>
        <LandingContainer>
          <LandingHeader>
            <Logo fillColor={pink} />
            <LandingSubtitle>l'idée ?</LandingSubtitle>
            <LandingText>
              Troquer des émotions culinaires contre un petit geste pour un
              monde meilleur !
            </LandingText>
            <LandingSubtitle>qui ? comment ?</LandingSubtitle>
            <LandingText>
              Je suis Esme, et je fais des gâteaux parce que ça rend les gens
              heureux. On me demande souvent de rassembler mes recettes dans un
              livre : c'est maintenant chose faite. Les fonds récoltés à l'achat
              de ce livre seront reversés à une (ou plusieurs !) association qui
              oeuvre pour un monde meilleur : scolariation des enfants, par
              exemple. La participation financière est tout à fait libre, et
              vous recevrez un email avec le livre en PDF suite à l'achat.
            </LandingText>
          </LandingHeader>

          <LandingCTAContainer>
            {this.props.orderIsInitiated ? (
              <Payment
                amount={this.props.amount}
                userEmail={this.props.userEmail}
                onAmountInputBlur={(event: any) =>
                  this.props.setAmount(parseInt(event.target.value, 10))
                }
                setOrderSuccess={this.props.setOrderSuccess}
              />
            ) : (
              <Fragment>
                <Input
                  onInputBlur={this.props.onEmailInput}
                  label={"adresse email :"}
                />
                <Input
                  onInputBlur={this.props.onAmountInputBlur}
                  label={"participation volontaire ($ CAD) :"}
                />

                <Button
                  display={"block"}
                  href={"#"}
                  content={"commander le livre"}
                  onOrderClick={this.orderBook}
                />

                <ContactLine>
                  pour toute question : allo@esmepim.com
                </ContactLine>
              </Fragment>
            )}
          </LandingCTAContainer>
        </LandingContainer>
      </Fragment>
    );
  }

  private orderBook = () => {
    if (!this.props.userEmail) {
      alert(`il semble que le champ d'e-mail est vide !`);
      return;
    }
    if (validateEmail(this.props.userEmail)) {
      this.props.onOrderClick();
    }
  };
}
