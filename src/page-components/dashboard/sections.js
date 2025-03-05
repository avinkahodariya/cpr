import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Star } from 'phosphor-react'
import {
  FlexColumn,
  FlexRow,
  FlexRowBetween,
  GreenOutLinedButton,
} from 'components'
import { Images } from 'assets'
import { SectionShadowTitle } from './element'
import { Carousel, Row } from 'antd'

const items = [
  {
    title: 'Interactive Gaming Scenarios',
    img: Images.Gaming,
  },
  {
    title: 'Instant Certification Download',
    img: Images.Certificate,
  },
  {
    title: 'Accredited by Top Organizations',
    img: Images.ThreeUser,
  },
  {
    title: 'Learn at Your Own Pace',
    img: Images.Walk,
  },
]

const missionitems = [
  {
    title: 'Making Learning Accessible',
    img: Images.Person,
  },
  {
    title: 'Delivering High-Quality Education',
    img: Images.Hat,
  },
  {
    title: 'Enhancing Real-World Preparedness',
    img: Images.Globe,
  },
  {
    title: 'Innovating for Better Learning',
    img: Images.Bulb,
  },
]

const courcsList = [
  {
    name: 'Adult, Child & Infant CPR/AED',
    tag: 'Paramedic',
    rating: 5,
    desc: 'Learn CPR techniques for different age groups and AED usage.',
  },
  {
    name: 'Basic First Aid & Choking Relief',
    tag: 'Nursing Student',
    rating: 5,
    desc: 'Covers first aid, choking relief, and emergency response.',
  },
  {
    name: 'Infant CPR Training',
    tag: 'Nursing Student',
    rating: 5,
    desc: 'Learn how to perform CPR on adults with hands-on training.',
  },
]

const testimonialsList = [
  {
    name: 'Rose Dawson',
    tag: 'Paramedic',
    rating: 5,
    desc: 'This platform has been a game-changer! The interactive scenarios made learning CPR feel real, and the certification process was seamless. Highly recommend it!',
  },
  {
    name: 'Rose Dawson',
    tag: 'Nursing Student',
    rating: 5,
    desc: 'I love how flexible and engaging the lessons are! The hands-on simulations helped me feel confident in emergency situations. Best online training ever!',
  },
  {
    name: 'Rose Dawson',
    tag: 'Paramedic',
    rating: 5,
    desc: 'This platform has been a game-changer! The interactive scenarios made learning CPR feel real, and the certification process was seamless. Highly recommend it!',
  },
  {
    name: 'Rose Dawson',
    tag: 'Paramedic',
    rating: 5,
    desc: 'This platform has been a game-changer! The interactive scenarios made learning CPR feel real, and the certification process was seamless. Highly recommend it!',
  },
]

const FeaturesSection = styled.div`
  text-align: center;
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBackground};
  .mission-card-box {
    direction: rtl;
  }
  .f-box {
    display: flex;
    align-items: flex-end;
  }
  .box {
    background: ${({ theme }) => theme.colors.lightBackground};
    border: 5.72px solid #ffffff33;
    padding-left: 4rem;
    color: ${({ theme }) => theme.colors.white};
    padding-top: 3rem;
    padding-bottom: 4rem;
    border-top-left-radius: 18rem;
    row-gap: 16px;
    border-top-left-radius: 18rem;
    .card-box {
      flex-direction: row;
      overflow-x: hidden;
      flex-wrap: nowrap !important;
      display: flex;
    }
    .sub-box {
      min-width: 300px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
  .mission-box {
    border-top-right-radius: 18rem;
    border-top-left-radius: 0rem !important;
    padding-left: 0rem;
    padding-right: 4rem;
  }
`

const TestimonialsSection = styled.section`
  color: ${({ theme }) => theme.colors.textLight};
  .user {
    width: 74px;
    height: 74px;
  }
  .about-line {
    line-height: 45px;
  }
  .ant-carousel {
    width: 100%;
  }
  .slick-slide {
    padding-inline: 10px;
  }
  .slick-dots-bottom {
    margin-top: 60px;
    position: relative;
  }
`
const HowItWorksSection = styled.section`
  color: ${({ theme }) => theme.colors.textLight};
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 48px;
  border: 5.72px solid #ffffff33;
  .title {
  }
  img {
    width: 100%;
    height: 900px;
  }
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
`

const StyledCard = styled.div`
  border: none;
  border-radius: 8px;
  .f-img {
    width: 217px;
    height: 217px;
  }
  .ant-card-body {
    color: ${({ theme }) => theme.colors.textLight};
  }
  .content-box {
    position: absolute;
    h3 {
      font-size: 15px;
    }
    img {
      width: 66px;
      height: 48px;
    }
  }
`

const TestimonialsCard = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px; /* Adjust this for rounded corners */
  position: relative;
  z-index: 0;
  padding: 20px; /* Adjust padding for content */
  overflow: hidden; /* Ensure content is clipped within the border-radius */

  /* Creating the gradient border using ::before */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      53.9deg,
      rgba(35, 164, 85, 0.8) 16.61%,
      rgba(7, 25, 47, 0.8) 98.52%
    );
    z-index: -1; /* Ensure the gradient border is behind the content */
    border-radius: 16px; /* Apply the same border-radius */
  }

  .tag {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textGray};
  }
  .desc {
    color: ${({ theme }) => theme.colors.textGray};
  }
`

const BorderWrapper = styled.div`
  background: transparent;
  border-radius: 16px; /* Ensuring the border also has rounded corners */
`

const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightBackground};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 20px; /* Content padding */
`

// const TestimonialsCard = styled.div`
//   background: ${({ theme }) => theme.colors.lightBackground};
//   color: ${({ theme }) => theme.colors.white};
//   border-radius: 16px;
//   border: 4px solid transparent; /* Set a transparent border to enable border-image */
//   border-image: linear-gradient(
//       53.9deg,
//       rgba(35, 164, 85, 0.8) 16.61%,
//       rgba(7, 25, 47, 0.8) 98.52%
//     )
//     1; /* Apply gradient to the entire border */

//   .tag {
//     font-size: 14px;
//     color: ${({ theme }) => theme.colors.textGray};
//   }
//   .desc {
//     color: ${({ theme }) => theme.colors.textGray};
//   }
// `

export const FeaturesOverview = () => {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef(null)

  // Function to handle scroll to the left
  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance (e.g., -300px)
        behavior: 'smooth', // Smooth scroll
      })
    }
  }

  // Function to handle scroll to the right
  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance (e.g., 300px)
        behavior: 'smooth', // Smooth scroll
      })
    }
  }

  return (
    <FeaturesSection className="ps-5 pt-5">
      <div className="box col-10 justify-content-end">
        <SectionTitle>
          <SectionShadowTitle title="Features Overview" />
        </SectionTitle>
        <FlexRow>
          <div className="f-box">
            <img
              className="caret-left"
              src={Images.CaretLeft}
              alt=""
              size={40}
              onClick={scrollToLeft} // Attach the scrollToLeft function to the left arrow
            />
            <img
              src={Images.CaretRight}
              className="caret-left"
              alt=""
              size={40}
              onClick={scrollToRight} // Attach the scrollToRight function to the right arrow
            />
          </div>
          <div
            ref={scrollContainerRef}
            className="gap-2 card-box"
            style={{
              overflowX: 'auto',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none',
            }}
          >
            {items.map(ele => (
              <div style={{ display: 'inline-block' }}>
                <StyledCard className="sub-box" key={ele.title}>
                  <img src={Images.FeatureBox} alt="" className="f-img" />
                  <div className="content-box">
                    <img src={ele.img} alt="" />
                    <h3>{ele.title}</h3>
                  </div>
                </StyledCard>
              </div>
            ))}
          </div>
        </FlexRow>
      </div>
    </FeaturesSection>
  )
}

export const OurMissionOverview = () => {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef(null)

  // Function to handle scroll to the left
  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance (e.g., -300px)
        behavior: 'smooth', // Smooth scroll
      })
    }
  }

  // Function to handle scroll to the right
  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance (e.g., 300px)
        behavior: 'smooth', // Smooth scroll
      })
    }
  }

  return (
    <FeaturesSection className="pt-5 justify-content-start ">
      <div className="box mission-box col-9 justify-content-start">
        <SectionTitle>
          <SectionShadowTitle title="Our Mission" />
        </SectionTitle>
        <FlexRow>
          <div
            ref={scrollContainerRef}
            className="gap-2 card-box mission-card-box"
            style={{
              overflowX: 'auto',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none',
            }}
          >
            {missionitems.map(ele => (
              <div style={{ display: 'inline-block' }}>
                <StyledCard className="sub-box">
                  <img src={Images.FeatureBox} alt="" className="f-img" />
                  <div className="content-box">
                    <img src={ele.img} alt="" />
                    <h3 className="green-title">{ele.title}</h3>
                  </div>
                </StyledCard>
              </div>
            ))}
          </div>
          <div className="f-box">
            <img
              className="caret-left"
              src={Images.CaretLeft}
              alt=""
              size={40}
              onClick={scrollToLeft} // Attach the scrollToLeft function to the left arrow
            />
            <img
              src={Images.CaretRight}
              className="caret-left"
              alt=""
              size={40}
              onClick={scrollToRight} // Attach the scrollToRight function to the right arrow
            />
          </div>
        </FlexRow>
      </div>
    </FeaturesSection>
  )
}

const AboutTag = styled.span`
  border: solid;
  border-color: #22a354;
  color: #22a354;
  border-radius: 4px;
  width: fit-content;
`

export const TestimonialsOverview = () => {
  // Set the initial slide index state to 0
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to handle the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? testimonialsList.length - 1 : prevSlide - 1,
    )
  }

  // Function to handle the next slide
  const handleNextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === testimonialsList.length - 1 ? 0 : prevSlide + 1,
    )
  }

  return (
    <TestimonialsSection className="p-5 justify-content-start ">
      <div className="box mission-box justify-content-start px-5">
        <SectionTitle>
          <SectionShadowTitle title="Testimonials" />
        </SectionTitle>
        <div id="testimonials">
          <FlexRowBetween>
            <h3 className="col-3 about-line ">
              What our loving users are saying{' '}
              <AboutTag className="about-us-tag px-1 mt-1">about us</AboutTag>
            </h3>
            <div className="f-box">
              <img
                className="caret-left"
                src={Images.CaretLeft}
                alt=""
                size={40}
                onClick={handlePrevSlide} // Move to the previous slide
              />
              <img
                src={Images.CaretRight}
                className="caret-left"
                alt=""
                size={40}
                onClick={handleNextSlide} // Move to the next slide
              />
            </div>
          </FlexRowBetween>
          <Row gutter={[16, 16]} justify="center" className="mt-4">
            <Carousel
              slidesToShow={3}
              selectedIndex={currentSlide} // Pass current slide index to Carousel
              beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} // Update state on slide change
            >
              {testimonialsList.map(ele => (
                <TestimonialsCard className="p-1" key={ele.name}>
                  <BorderWrapper>
                    <ContentWrapper>
                      <FlexColumn className="mb-3">
                        <FlexRow className="align-items-center">
                          <img src={Images.User} alt="" className="user" />
                          <FlexColumn className="ms-3">
                            <p className="mb-0"> {ele.name}</p>
                            <p className="mb-0 tag"> {ele.tag}</p>
                          </FlexColumn>
                        </FlexRow>
                      </FlexColumn>
                      <div className="desc mb-2">{ele.desc}</div>
                      <FlexRow>
                        <Star color="#FFD231" />
                        <Star color="#FFD231" />
                        <Star color="#FFD231" />
                        <Star color="#FFD231" />
                        <Star color="#FFD231" />
                      </FlexRow>
                    </ContentWrapper>
                  </BorderWrapper>
                </TestimonialsCard>
              ))}
            </Carousel>
          </Row>
        </div>
      </div>
    </TestimonialsSection>
  )
}

export const HowItWorksOverview = () => {
  return (
    <HowItWorksSection className="m-5 ">
      <div className="">
        <SectionTitle className="py-5 title">
          <SectionShadowTitle title="How It Works" />
        </SectionTitle>
        <div>
          <img src={Images.HowItWorks} alt="" />
        </div>
      </div>
    </HowItWorksSection>
  )
}

const CertiContainer = styled(HowItWorksSection)`
  .certi-img {
    display: flex; /* Flexbox layout to align images horizontally */
    justify-content: center; /* Center the middle image */
    align-items: center;
    overflow-x: auto; /* Allow horizontal scrolling */
    padding: 0 10%; /* Add padding to hide the overflow from the side images */
    position: relative;
  }

  .certi-img img {
    width: 50%;
    height: 300px;
    object-fit: cover; /* Ensure images maintain their aspect ratio */
    transition: transform 0.3s ease-in-out; /* Smooth transition for transform */
  }

  .certi-img img:first-child {
    transform: translateX(-25%); /* Move the first image to the left */
  }

  .certi-img img:last-child {
    transform: translateX(25%); /* Move the last image to the right */
  }

  .certi-img::-webkit-scrollbar {
    display: none; /* Hide the scrollbar */
  }

  /* Optional: Add custom styles for the button section */
  .my-5 {
    margin-top: 40px;
    text-align: center;
  }
`

export const CertificateOverview = () => {
  return (
    <CertiContainer className="m-5">
      <div>
        <SectionTitle className="py-5 title">
          <SectionShadowTitle title="Certificates" />
        </SectionTitle>
        <div className="certi-img">
          <img src={Images.PlaceHolder.Certi} alt="Certificate 1" />
          <img src={Images.PlaceHolder.Certi} alt="Certificate 2" />
          <img src={Images.PlaceHolder.Certi} alt="Certificate 3" />
        </div>
      </div>
      <div className="my-5 text-center">
        <GreenOutLinedButton>Get Your Certificate Now</GreenOutLinedButton>
      </div>
    </CertiContainer>
  )
}

const GetKnowToUsContainer = styled.div`
  h6 {
    line-height: 2rem;
  }
`
export const GetKnowToUs = () => {
  return (
    <GetKnowToUsContainer className="m-5 px-5">
      <div className="">
        <SectionTitle className="py-5 title">
          <SectionShadowTitle title="Get to Know Us" />
          <h3 className="mt-4 text-center">
            Empowering You with Life-Saving Skills
          </h3>
          <h6 className="mt-4 text-center">
            We are dedicated to providing top-quality CPR & First Aid training
            that is engaging, accessible, and accredited. Our interactive
            learning platform ensures you gain real-world skills through
            expert-verified content and hands-on simulations.
          </h6>
        </SectionTitle>
      </div>
    </GetKnowToUsContainer>
  )
}
const CourceContainer = styled(TestimonialsSection)`
  .cource {
    // width: 400px !important;
    .img {
      background-size: cover; /* Adjust image to cover the entire area */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Don't repeat the image */
      background-image: url(${Images.Cover}); /* Set the background image */
      padding: 0px;
    }

    h5 {
      font-size: 22px;
    }
    h6 {
      color: rgba(166, 169, 184, 1);
      font-size: 18px;
    }
  }
  .content {
    background: rgba(0, 0, 0, 0.73);
    padding: 20px;
    border-radius: 14px;
  }
  .caret-left {
    padding-bottom: 60px;
    padding-inline: 40px;
  }
`
export const CourcesList = () => {
  // Set the initial slide index state to 0
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to handle the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? testimonialsList.length - 1 : prevSlide - 1,
    )
  }

  // Function to handle the next slide
  const handleNextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === testimonialsList.length - 1 ? 0 : prevSlide + 1,
    )
  }

  return (
    <CourceContainer className="p-5 justify-content-start mt-5 ">
      <div className="box mission-box justify-content-start px-5 mx-5">
        <SectionTitle>
          <SectionShadowTitle title="Courses" />
        </SectionTitle>
        <div id="testimonials">
          <FlexRowBetween>
            <h3 className="col-6 about-line ">
              Choose Your CPR & First Aid
              <AboutTag className="about-us-tag px-1 ms-2 mt-1">
                Course
              </AboutTag>
            </h3>
          </FlexRowBetween>
          <FlexRow>
            <img
              className="caret-left"
              src={Images.CaretLeft}
              alt=""
              size={40}
              onClick={handlePrevSlide} // Move to the previous slide
            />
            <Row gutter={[16, 16]} justify="center" className="mt-4">
              <Carousel
                slidesToShow={2}
                selectedIndex={currentSlide} // Pass current slide index to Carousel
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} // Update state on slide change
              >
                {courcsList.map(ele => (
                  <TestimonialsCard className="p-1 cource" key={ele.name}>
                    <BorderWrapper>
                      <ContentWrapper className="img">
                        <div className="content">
                          <FlexColumn className="mb-3 text-center">
                            <h5 className="mt-2">{ele.name}</h5>
                            <h6 className="my-4">{ele.desc}</h6>
                            <span>
                              <GreenOutLinedButton>
                                Enroll Now
                              </GreenOutLinedButton>
                            </span>{' '}
                          </FlexColumn>
                        </div>
                      </ContentWrapper>
                    </BorderWrapper>
                  </TestimonialsCard>
                ))}
              </Carousel>
            </Row>
            <img
              src={Images.CaretRight}
              className="caret-left"
              alt=""
              size={40}
              onClick={handleNextSlide} // Move to the next slide
            />
          </FlexRow>
        </div>
      </div>
    </CourceContainer>
  )
}
