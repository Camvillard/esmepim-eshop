import React, { Fragment, Component } from 'react'

import { Input } from '../Input/Input.component'
import { Logo } from '../Logo/Logo.component'
import { Container } from '../../theme/general.ui'
import { themeColors } from '../../theme/theme-variables'
import { LandingText, LandingContainer, LandingCTAContainer, LandingHeader, LandingSubtitle } from './Landing.ui'
import { Button } from '../Button/Button.component'
import { ILandingProps, ILandingState } from './Landing.type'

const {
  pink
} = themeColors


export class Landing extends Component<ILandingProps, ILandingState> {

  public state = {
    userEmail: ""
  }

  public render() {
    return(
      <Fragment>
          <LandingContainer>
            <LandingHeader>
              <Logo fillColor={pink} padding={'0 0 0 24px'} />
              <LandingSubtitle>
                l'idée ?
              </LandingSubtitle>
              <LandingText>
                Troquer des émotions culinaires contre un petit geste pour un monde meilleur ! 
              </LandingText>
              <LandingSubtitle>
                qui ? comment ?
              </LandingSubtitle>
              <LandingText>
                Je suis Esme, et je fais des gâteaux parce que ça rend les gens heureux. On me demande souvent de rassembler mes recettes dans un livre : c'est maintenant chose faite.
                Les fonds récoltés à l'achat de ce livre seront reversés à une (ou plusieurs !) association qui oeuvre pour un monde meilleur : scolariation des enfants, par exemple.
                La participation financière est tout à fait libre, et vous recevrez un email avec le livre en PDF suite à l'achat.
              </LandingText>
              <LandingText>
                voir le sommaire du livre
              </LandingText>
            </LandingHeader>
          
            <LandingCTAContainer>
              <Input
                onInputBlur={this.onInputBlur}/>
              <Button
                display={'block'}
                href={'#'}
                content={'commander le livre'}
                onOrderClick={this.orderBook}
              />
            </LandingCTAContainer>
          </LandingContainer>
      </Fragment>
    )}

  private onInputBlur = (e:any) => {
    this.setState({userEmail: e.target.value})
  }

  private orderBook = () => {
    const { userEmail} = this.state
    console.log('ordering', userEmail)
    if (!userEmail) {
      alert(`le champ d'email est vide !`)
      return
    }
    this.props.onOrderClick()
    console.log('call api')
    // this.setState({orderInitiated: true})
  }
}