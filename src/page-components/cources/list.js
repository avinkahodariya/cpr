import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Select, Input, Popover, Button, Avatar } from 'antd'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'
import { CircleNotch, Clock } from 'phosphor-react'
import { FlexRow, LoaderBar } from 'components'
import { CommonUtility } from 'utility'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    color: ${({ theme }) => theme.colors.white} !important;
  }
  .ant-select-item-option-content {
    color: ${({ theme }) => theme.colors.white} !important;
    background: #0a2724 !important;
  }
  .ant-select {
    height: 40px;
  }
`

const Filters = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const FilterSelect = styled(Select)`
  width: 150px;
  color: #1c8b5e;
  background: #0a2724 !important;

  .ant-select-selector {
    border: 1px solid #1c8b5e !important;
    background: #0a2724 !important;
    color: #1c8b5e;
    border-bottom-width: 3px !important;
    border-style: solid;
    border-color: #23a455;
  }

  .ant-select-arrow {
    color: #1c8b5e;
  }
`

const ClearAll = styled.span`
  color: #1c8b5e;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const SearchBox = styled(Input)`
  width: 200px;
  border: 1px solid #1c8b5e !important;
  border-style: solid;
  border-color: #22a354;
  background: #0a2724;
  border-bottom-width: 3px !important;
  height: 40px;
  .ant-input {
    background: #0a2724 !important;
    color: #1c8b5e !important;
  }
  .ant-input-affix-wrapper {
    background: #0a2724 !important;
  }
`

export const CourcesFilterBar = ({ filterChanged, filter, resetFilter }) => {
  return (
    <FilterContainer className="-3">
      <Filters>
        <FilterSelect
          placeholder="By category"
          value={filter.category}
          popupClassName="filter-box"
          onChange={ele => filterChanged('category', ele)}
        >
          <Option value="adult">Adult</Option>
          <Option value="child">Child</Option>
          <Option value="infant">Infant</Option>
        </FilterSelect>

        <FilterSelect
          placeholder="By duration"
          popupClassName="filter-box"
          value={filter.duration}
          onChange={ele => filterChanged('duration', ele)}
        >
          <Option value={10800}>Short (1 to 3 hrs)</Option>
          <Option value={10000000000}>Comprehensive (3 to more)</Option>
        </FilterSelect>

        <FilterSelect placeholder="By price" popupClassName="filter-box">
          <Option value="budget">Budget-Friendly</Option>
          <Option value="mid">Mid-Range</Option>
          <Option value="premium">Premium</Option>
        </FilterSelect>

        {(filter.category || filter.duration) && (
          <ClearAll onClick={() => resetFilter()}>
            Clear All <CloseOutlined />
          </ClearAll>
        )}
      </Filters>
      <SearchBox
        style={{ background: '#0a2724' }}
        placeholder="Search"
        prefix={<SearchOutlined />}
      />
    </FilterContainer>
  )
}

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cource-card {
    position: relative;
  }
`

const CourseCard = styled.div`
  background: #1f1f1f;
  border-width: 0.78px, 1.57px, 3.14px, 0.78px;
  border-style: solid;
  border-color: #22a354;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 15px;
  color: #fff;
  box-shadow: 0px 0px 157.68px -94.19px #22a354 inset;
  .enroll {
    position: absolute;
    z-index: 99999999999;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`

const CourseImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  background: #00000099;
`

const StudentList = styled(FlexRow)`
  .st-box {
    background: white;
    color: black;
    padding: 5px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  position: absolute;
  bottom: 10px;
  width: 100%;
  justify-content: center;
`

const AvatarBox = styled(Avatar)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
`

const Content = styled.div`
  padding: 15px;
  position: relative;
  .enroll {
    position: absolute;
    z-index: 999;
    bottom: 3px;
    left: 0;
    justify-content: center;
  }
`

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`

const Description = styled.p`
  font-size: 14px;
  //   color: #a0a0a0;
`

const PriceContainer = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  .price {
    color: #ff5500;
  }
`

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #22a354;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  .duration {
    color: #ffd700;
  }
  .persantage {
    color: white;
  }
`

const EnrollButton = styled(Button)`
  background: #0a2724;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-width: 0.78px, 0.78px, 1.96px, 0.78px;
  border-style: solid;
  border-color: #23a455;
  height: 33.75;
  border-top-width: 0.78px;
  border-right-width: 0.78px;
  border-bottom-width: 1.96px;
  border-left-width: 0.78px;
  border-radius: 6.28px;
  color: white;
  &:hover {
    color: white !important;
    border-color: #23a455 !important;
    background: #1f1f1f !important;
  }
  cursor: pointer;
  border-radius: 5px;
`

const ReadMoreText = styled.p`
  .toggle-text {
    font-weight: bold;
    cursor: pointer;
    color: #23a455 !important;
  }
`
const ReadMoreBox = ({ text }) => {
  const [readmore, setReadMore] = useState(false)
  const trimmedText = useMemo(
    () => (readmore ? text : CommonUtility.truncateString(text, 50)),
    [text, readmore],
  )

  return (
    <ReadMoreText>
      {trimmedText}
      {text.length > 50 && (
        <span className="toggle-text" onClick={() => setReadMore(!readmore)}>
          {!readmore ? 'Read More' : ' Read Less'}
        </span>
      )}
    </ReadMoreText>
  )
}
export const CourseList = ({ list, loading }) => {
  const navigate = useNavigate()
  return (
    <CoursesContainer className="mt-5">
      {loading ? (
        <LoaderBar />
      ) : (
        <>
          {list.map(course => (
            <div
              className="col-4 px-2 cource-card"
              onClick={() => navigate(`${course.id}`)}
            >
              <CourseCard key={course.id} className="mb-5">
                <ImageContainer>
                  <CourseImage src={course.image} alt={course.title} />
                  <Tag>{course.tag}</Tag>
                  <Popover
                    content={
                      <div>
                        {course.students.map((student, index) => (
                          <AvatarBox key={index} src={student} alt="Student" />
                        ))}
                      </div>
                    }
                    title="Students"
                  >
                    <StudentList className="">
                      <div className="st-box">
                        <Avatar.Group>
                          {course.students.slice(0, 3).map((student, index) => (
                            <AvatarBox
                              key={index}
                              src={student}
                              alt="Student"
                            />
                          ))}
                        </Avatar.Group>
                        <span>+40 students</span>
                      </div>
                    </StudentList>
                  </Popover>
                </ImageContainer>
                <Content>
                  <Title>{course.title}</Title>
                  <Description>
                    <ReadMoreBox text={course.description} />
                  </Description>
                  <PriceContainer>
                    <span className="price">{course.price}</span>{' '}
                    <OldPrice>{course.oldPrice}</OldPrice>
                  </PriceContainer>
                  <InfoRow>
                    <span className="duration">
                      <Clock size={20} /> {course.duration}
                    </span>
                    <span className="duration">
                      <CircleNotch size={20} /> Completion Rate{' '}
                      <span className="persantage">
                        {course.completionRate}
                      </span>
                    </span>
                  </InfoRow>
                </Content>
                <div className="enroll">
                  <EnrollButton className="enroll1">Enroll Now</EnrollButton>
                </div>
              </CourseCard>
            </div>
          ))}
        </>
      )}
    </CoursesContainer>
  )
}
