import {
  FlexColumn,
  FlexRowBetween,
  GreenOutLinedButton,
  FlexRow,
  AppAvatar,
} from 'components'
import { useState } from 'react'
import styled from 'styled-components'
import { Images, Videos } from 'assets'
import { Certificate, FileArrowDown, Video } from '@phosphor-icons/react'
import {
  ArrowUp,
  CaretCircleRight,
  Check,
  Info,
  Star,
  UsersThree,
  X,
} from 'phosphor-react'
import { Progress } from 'antd'

const DetailContainer = styled.div`
  .sidebar {
    margin-right: 35px;
    margin-top: -80px;
  }
  .not-sure {
    border-radius: 16px;
    background: linear-gradient(
      268.63deg,
      rgba(217, 217, 217, 0.1) -15.83%,
      rgba(172, 172, 172, 0.1) 148.4%
    );
    border: 1px solid rgba(217, 217, 217, 1);
  }
  .grey {
    h6 {
      margin-block: 10px;
      color: #acacac;
    }
  }
  .overview-grey {
    h6 {
      color: #acacac;
    }
  }
`
const VideoBanner = styled.video`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-width: 1px 3px 4px 1px;
  border-style: solid;
  border-radius: 16px;
  border-color: rgba(34, 163, 84, 1);
  box-shadow: 0px 0px 31.9px 8px rgba(34, 163, 84, 0.25) inset;
`
const TabContainer = styled.div`
  .inactive {
    border-width: 1px 1.5px 2.5px 1px;
    border-style: solid;
    border-color: rgba(81, 87, 97, 1);
    background: rgba(52, 58, 65, 1);
  }
  .content {
    color: rgba(255, 255, 255, 1);
    .overview {
      border-radius: 16px;
      background: linear-gradient(
        261.03deg,
        rgba(34, 163, 84, 0.1) -46.66%,
        rgba(7, 25, 47, 0.1) 99.41%
      );
    }
  }
  .tab {
    padding: 20px;
  }
`

const ShadowBox = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    261.03deg,
    rgba(34, 163, 84, 0.1) -46.66%,
    rgba(7, 25, 47, 0.1) 99.41%
  );
  .ant-progress-text {
    display: none;
  }
  .ant-progress {
    align-content: center;
    padding-inline: 10px;
  }
`
const LeftReviewBox = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    207.01deg,
    rgba(34, 163, 84, 0.5) -27%,
    rgba(13, 61, 31, 0.1) 96.13%
  );
  h6 {
    color: #ffffff80;
    font-size: 12px;
  }
`
const Overview = () => (
  <FlexColumn>
    <div className="overview p-4">
      <h4>Course Description</h4>
      <h6 className="mt-4">
        This Adult CPR Training course is designed to teach you how to respond
        quickly and effectively in emergency situations involving cardiac arrest
        in adults. Whether you're a healthcare professional, workplace safety
        officer, or simply someone who wants to be prepared, this course
        provides step-by-step, hands-on training in Cardiopulmonary
        Resuscitation (CPR) and the use of an Automated External Defibrillator
        (AED).
      </h6>
    </div>
    <div className="overview p-4 mt-5 overview-grey">
      <h4>What you'll learn in this course?</h4>
      <h6 className="mt-2">
        <CaretCircleRight
          size={30}
          weight="fill"
          color="#22A354"
          src={Images.CaretRight}
          alt=""
        />{' '}
        Recognizing Cardiac Arrest
      </h6>
      <h6 className="mt-2">
        <CaretCircleRight size={30} weight="fill" color="#22A354" /> Performing
        High-Quality Adult CPR
      </h6>
      <h6 className="mt-2">
        <CaretCircleRight
          size={30}
          weight="fill"
          color="#22A354"
          src={Images.CaretRight}
          alt=""
        />{' '}
        Using an Automated External Defibrillator (AED)
      </h6>
      <h6 className="mt-2">
        <CaretCircleRight
          size={30}
          weight="fill"
          color="#22A354"
          src={Images.CaretRight}
          alt=""
        />{' '}
        Hands-Only CPR
      </h6>
      <h6 className="mt-2">
        <CaretCircleRight
          size={30}
          weight="fill"
          color="#22A354"
          src={Images.CaretRight}
          alt=""
        />{' '}
        Scene Safety & Emergency Preparedness
      </h6>
      <h6 className="mt-2">
        <CaretCircleRight
          size={30}
          weight="fill"
          color="#22A354"
          src={Images.CaretRight}
          alt=""
        />{' '}
        Common CPR Mistakes & How to Avoid Them{' '}
      </h6>
    </div>
    <div className="overview p-4 mt-5">
      <h4>Try free courses or enroll in paid courses</h4>
      <FlexRow className="p-3 not-sure my-4 align-items-center">
        <div>
          <Info size={24} type="filled" color="#FF5500" />
        </div>
        <h6 className="ms-2 my-0">
          Not sure? All courses have a 30-day money-back gauantee
        </h6>
      </FlexRow>
      <GreenOutLinedButton className="p-4 col-12">
        View paid Adult CPR courses
      </GreenOutLinedButton>
      <FlexRow className="mt-4">
        <FlexColumn className="col-6 grey">
          <h4 className="mb-3">Free courses</h4>
          <h6>
            <Check color="#22A354" /> Online video content
          </h6>
          <h6>
            <X color="#FF0000" /> Certificate of completion
          </h6>
          <h6>
            <X color="#FF0000" /> Instructor Q&A
          </h6>
          <h6>
            <X color="#FF0000" /> Instructor direct message
          </h6>
        </FlexColumn>
        <FlexColumn className="col-6 grey">
          <h4 className="mb-3">Free courses</h4>
          <h6>
            <Check color="#22A354" /> Online video content
          </h6>
          <h6>
            <Check color="#22A354" /> Certificate of completion
          </h6>
          <h6>
            <Check color="#22A354" /> Instructor Q&A
          </h6>
          <h6>
            <Check color="#22A354" /> Instructor direct message
          </h6>
        </FlexColumn>
      </FlexRow>
    </div>
  </FlexColumn>
)

const Review = () => (
  <FlexColumn>
    <ShadowBox className="overview p-4">
      <h4>Reviews</h4>
      <FlexRow className="mt-4">
        <LeftReviewBox className="col-3 p-3">
          <h4>
            4.5 <Star color="#FFB400" weight="fill" />
          </h4>
          <h6>273 Reviews</h6>
          <h4>88%</h4>
          <h6>Recommended</h6>
        </LeftReviewBox>
        <FlexRowBetween className="col-9 flex-column px-2">
          <FlexRow>
            5{' '}
            <Progress
              percent={100}
              strokeColor="#FFB400"
              percentPosition={{ align: 'center', type: 'outer' }}
            />{' '}
            76
          </FlexRow>
          <FlexRow>
            4{' '}
            <Progress
              percent={100}
              strokeColor="#FFB400"
              percentPosition={{ align: 'center', type: 'outer' }}
            />{' '}
            76
          </FlexRow>{' '}
          <FlexRow>
            3{' '}
            <Progress
              percent={100}
              strokeColor="#FFB400"
              percentPosition={{ align: 'center', type: 'outer' }}
            />{' '}
            76
          </FlexRow>{' '}
          <FlexRow>
            2{' '}
            <Progress
              percent={40}
              strokeColor="#FFB400"
              percentPosition={{ align: 'center', type: 'outer' }}
            />{' '}
            46
          </FlexRow>{' '}
          <FlexRow>
            1{' '}
            <Progress
              percent={60}
              strokeColor="#FFB400"
              percentPosition={{ align: 'center', type: 'outer' }}
            />{' '}
            58
          </FlexRow>{' '}
        </FlexRowBetween>
      </FlexRow>
    </ShadowBox>

    <ShadowBox className="mt-4 p-4">
      <FlexRow className="col-12">
        <div className="col-2">
          <AppAvatar className="" url={Images.User} size={70} />
        </div>
        <FlexColumn className="col-10">
          <FlexRowBetween>
            <h5>Balla Daniella</h5>
            <FlexRow>
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
            </FlexRow>
          </FlexRowBetween>
          <h6>
            This CPR course was incredibly informative and easy to follow. The
            hands-on approach helped me feel confident in handling real-life
            emergencies!
          </h6>
        </FlexColumn>
      </FlexRow>
    </ShadowBox>
    <ShadowBox className="mt-4 p-4">
      <FlexRow className="col-12">
        <div className="col-2">
          <AppAvatar className="" url={Images.User} size={70} />
        </div>
        <FlexColumn className="col-10">
          <FlexRowBetween>
            <h5>Balla Daniella</h5>
            <FlexRow>
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
            </FlexRow>
          </FlexRowBetween>
          <h6>
            This CPR course was incredibly informative and easy to follow. The
            hands-on approach helped me feel confident in handling real-life
            emergencies!
          </h6>
        </FlexColumn>
      </FlexRow>
    </ShadowBox>
    <ShadowBox className="mt-4 p-4">
      <FlexRow className="col-12">
        <div className="col-2">
          <AppAvatar className="" url={Images.User} size={70} />
        </div>
        <FlexColumn className="col-10">
          <FlexRowBetween>
            <h5>Balla Daniella</h5>
            <FlexRow>
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
            </FlexRow>
          </FlexRowBetween>
          <h6>
            This CPR course was incredibly informative and easy to follow. The
            hands-on approach helped me feel confident in handling real-life
            emergencies!
          </h6>
        </FlexColumn>
      </FlexRow>
    </ShadowBox>
    <ShadowBox className="mt-4 p-4">
      <FlexRow className="col-12">
        <div className="col-2">
          <AppAvatar className="" url={Images.User} size={70} />
        </div>
        <FlexColumn className="col-10">
          <FlexRowBetween>
            <h5>Balla Daniella</h5>
            <FlexRow>
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
              <Star color="#FFB400" weight="fill" />
            </FlexRow>
          </FlexRowBetween>
          <h6>
            This CPR course was incredibly informative and easy to follow. The
            hands-on approach helped me feel confident in handling real-life
            emergencies!
          </h6>
        </FlexColumn>
      </FlexRow>
    </ShadowBox>
  </FlexColumn>
)
const InstructorViewContainer = styled.div`
  .green {
    color: #22a354;
    text-decoration: underline;
  }
`
const InstructorView = () => {
  return (
    <InstructorViewContainer>
      <ShadowBox className="overview p-4">
        <h4>Instructor</h4>
        <h6 className="mt-3 green">
          Save a Life Certifications by CPRReady Now
        </h6>
        <FlexRow className="mt-4">
          <div className="col-3">
            <AppAvatar url={Images.User} size={130} />
          </div>
          <FlexRowBetween className="flex-column ms-4">
            <h6>
              <Star /> 4.5 Instructor Rating
            </h6>
            <h6>
              <Certificate /> 15,509 Reviews
            </h6>
            <h6>
              <UsersThree /> 131,504
            </h6>
            <h6>
              <Video /> 9 courses
            </h6>
          </FlexRowBetween>
        </FlexRow>
      </ShadowBox>
      <ShadowBox className="mt-3 p-3">
        John Doe is a highly experienced CPR instructor with over 10 years of
        hands-on training in adult CPR, AED usage, and emergency response
        techniques. As a certified CPR trainer, he has helped thousands of
        individuals gain the skills and confidence needed to respond effectively
        in life-threatening situations. John Doe is a highly experienced CPR
        instructor with over 10 years of hands-on training in adult CPR, AED
        usage, and emergency response techniques. As a certified CPR trainer, he
        has helped thousands of individuals gain the skills and confidence
        needed to respond effectively in life-threatening situations.
        <p>
          John Doe is a highly experienced CPR instructor with over 10 years of
          hands-on training in adult CPR, AED usage, and emergency response
          techniques. As a certified CPR trainer, he has helped thousands of
          individuals gain the skills and confidence needed to respond
          effectively in life-threatening situations.
        </p>{' '}
        <p>
          {' '}
          John Doe is a highly experienced CPR instructor with over 10 years of
          hands-on training in adult CPR, AED usage, and emergency response
          techniques. As a certified CPR trainer, he has helped thousands of
          individuals gain the skills and confidence needed to respond
          effectively in life-threatening situations.
        </p>
        <GreenOutLinedButton>
          Show Less <ArrowUp />
        </GreenOutLinedButton>
      </ShadowBox>
    </InstructorViewContainer>
  )
}

const SideRightBarContainer = styled.div`
  color: white;
  border-width: 4.18px 4.18px 5.34px 4.18px;
  background: rgba(7, 25, 47, 1);
  border-style: solid;
  border-radius: 16px;
  border-color: rgba(34, 163, 84, 1);
  img {
    border-radius: 10px;
  }
  .point {
    color: rgba(172, 172, 172, 1);
  }
  .divider {
    height: 1px;
    border: 1.16px solid rgba(255, 255, 255, 1);
  }
  .price {
    color: rgba(255, 85, 0, 1);
    font-size: 26px;
  }
  .old-price {
    color: rgba(34, 163, 84, 1);
    font-size: 20px;
    text-decoration: line-through;
  }
`

const SideRightBar = () => {
  return (
    <SideRightBarContainer className="p">
      <FlexColumn>
        <img src={Images.Cover} alt="" />
        <div className="p-4">
          <FlexRowBetween className="col my-2 mt-1 align-items-center">
            <FlexRow className="align-items-center">
              <h5 className="price mt-0">$66</h5>
              <h5 className="old-price ms-4 mt-0">$100</h5>
            </FlexRow>
            <h5 className="discount">34% off</h5>
          </FlexRowBetween>
          <GreenOutLinedButton className="col-12 p-4">
            Enroll Now
          </GreenOutLinedButton>
          <div className="divider mt-3" />
          <div className="content mt-4">
            <h5>This course included</h5>
            <div className="mt-3 point">
              <h6>Hands-on CPR training</h6>
              <h6>Certification of completion</h6>
              <h6>Access on all devices</h6>
              <h6> 10 Comprehensive Modules</h6>
            </div>{' '}
          </div>
          <div className="divider mt-3" />
          <div className="content mt-4">
            <h5>Download PDFs</h5>
            <div className="mt-3 point">
              <FlexRowBetween>
                <h6>Adult CPR Techniques Guide</h6>
                <FileArrowDown color="#22A354" size={20} />
              </FlexRowBetween>
              <FlexRowBetween>
                <h6>Step-by-Step CPR Procedure</h6>{' '}
                <FileArrowDown color="#22A354" size={20} />
              </FlexRowBetween>
              <FlexRowBetween>
                <h6>Emergency Response Checklist</h6>{' '}
                <FileArrowDown color="#22A354" size={20} />
              </FlexRowBetween>
            </div>{' '}
          </div>
        </div>
      </FlexColumn>
    </SideRightBarContainer>
  )
}
const tabs = [
  {
    title: 'Overview',
    compo: <Overview />,
  },
  {
    title: 'Curriculum',
    compo: <Overview />,
  },
  {
    title: 'Instructors',
    compo: <InstructorView />,
  },
  {
    title: 'Reviews',
    compo: <Review />,
  },
]
export const CourceDetailScreen = () => {
  const videoSrc = Videos.CPR

  const [tab, setTab] = useState('Overview')
  return (
    <DetailContainer className="p-5">
      <VideoBanner src={videoSrc} autoPlay loop muted />
      <FlexRowBetween>
        <TabContainer className="col-7 mt-5">
          <FlexColumn>
            <FlexRowBetween>
              {tabs.map(ele => (
                <GreenOutLinedButton
                  className={`${ele.title === tab ? 'active' : 'inactive'} tab`}
                  onClick={() => setTab(ele.title)}
                >
                  {ele.title}
                </GreenOutLinedButton>
              ))}
            </FlexRowBetween>
            <div className="content mt-4">
              {tabs.find(ele => ele.title === tab).compo}
            </div>
          </FlexColumn>
        </TabContainer>
        <div className="col-4 sidebar">
          <SideRightBar />
        </div>
      </FlexRowBetween>
    </DetailContainer>
  )
}
