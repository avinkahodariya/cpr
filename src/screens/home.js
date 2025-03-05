import React from 'react'
import styled from 'styled-components'
import { Button, Layout } from 'antd'
import { Images } from 'assets'
import {
  CertificateOverview,
  CourcesList,
  FeaturesOverview,
  GetKnowToUs,
  HowItWorksOverview,
  OurMissionOverview,
  TestimonialsOverview,
} from 'page-components'

const { Content } = Layout

const AppContainer = styled(Layout)`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.textLight};
  .caret-left {
    &:hover {
      opacity: 0.4;
    }
  }
`

const HeroSection = styled.section`
  position: relative;
  .content {
    padding: 5rem 2rem;
    position: absolute;
    z-index: 99;
    top: 0;
  }
  .main-img {
    object-fit: cover;
  }
  .cover-img {
    height: 600px;
    width: 100%;
  }
  .img-cont {
    text-align: center;
    position: absolute;
    z-index: 99;
    width: 100%;
    top: 0;
  }
`

const HeroHeading = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`

const HeroSubHeading = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
`

const HeroButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  // border: none;
  // color: ${({ theme }) => theme.colors.black};
  // font-size: 1rem;
  // padding: 0 2rem;
  // height: 3rem;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lightBackground} !important;
  }
`
export const HomeScreen = () => {
  return (
    <AppContainer>
      <Content style={{ minHeight: '100vh' }}>
        {/* HERO SECTION */}
        <HeroSection id="home">
          <div className="t">
            <img src={Images.Cover} alt="" className="cover-img main-img " />
          </div>
          <div className="img-cont">
            <img src={Images.CoverLayer} alt="" className="cover-img " />
          </div>
          <div className="content mt-5 ms-5">
            <HeroHeading>Learn CPR &amp; First Aid</HeroHeading>
            <HeroHeading>Anywhere. Anytime.</HeroHeading>
            <HeroSubHeading>
              Save lives with our AHA & ILCOR-compliant training. Get certified
              today!{' '}
            </HeroSubHeading>
            <HeroButton size="large">Get Started</HeroButton>
          </div>
        </HeroSection>
        <GetKnowToUs />
        <FeaturesOverview />
        <OurMissionOverview />
        <CourcesList />
        <HowItWorksOverview />
        <TestimonialsOverview />
        <CertificateOverview />
      </Content>
    </AppContainer>
  )
}
