import React, { Fragment } from 'react'
import { Input } from '../Input/Input.component'
import { Logo } from '../Logo/Logo.component'
import { Container } from '../../theme/general.ui'
import { themeColors } from '../../theme/theme-variables'
import { LandingText, LandingContainer, LandingCTAContainer, LandingHeader } from './Landing.ui'
import { Button } from '../Button/Button.component'

const {
  pink
} = themeColors

export const Landing = () => {
  return(
    <Fragment>
        <LandingContainer>
          <LandingHeader>
            <Logo fillColor={pink} padding={'0 0 0 24px'} />
            <LandingText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut incidunt eaque. Expedita numquam nesciunt unde consectetur consequatur recusandae sequi earum libero totam illo, qui magni esse, atque debitis laboriosam!
            </LandingText>
          </LandingHeader>
        
          <LandingCTAContainer>
            <Input />
            <Button
              display={'block'}
              href={'#'}
              content={'commander le livre'}
            />
          </LandingCTAContainer>
        </LandingContainer>
    </Fragment>
  )
}