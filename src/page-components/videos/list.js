import React, { useMemo, useState } from 'react'
import { Card } from 'antd'
import {
  LikeOutlined,
  EyeOutlined,
  MessageOutlined,
  StopOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'
import { CommonUtility, DateFormat, DateUtility } from 'utility'
import {
  AppAvatar,
  CommonPagination,
  FlexRow,
  FlexRowBetween,
  LoaderBar,
  PrimaryButton,
} from 'components'
import { GetVideosList } from 'hooks'
import { VideoModal } from './modal'

const VideoCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledCard = styled(Card)`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  .ant-card-body {
    padding: 16px;
  }
`

const VideoDetails = styled.div`
  margin-top: 10px;
  color: #606770;
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 10px;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`

const ReadMoreText = styled.p`
  font-weight: bold;
  .toggle-text {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
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
      {trimmedText}{' '}
      {text.length > 50 && (
        <span className="toggle-text" onClick={() => setReadMore(!readmore)}>
          {readmore ? 'Read More' : 'Read Less'}
        </span>
      )}
    </ReadMoreText>
  )
}

export const VideoDetailSection = ({ item }) => {
  const likes = item?.votes?.up?.length
  return (
    <>
      <h5 className="mb-0">{item.title}</h5>
      <FlexRow className="align-items-center">
        <AppAvatar size={25} url={item.creator_id} title={item.creator_id} />
        <div className="ms-2">{item.creator_id}</div>
      </FlexRow>
      <div className="mt-2">
        {DateUtility.dateToLocalISO(
          new Date(item.createdAt),
          DateFormat.DDMMYYYY,
        )}
      </div>{' '}
      <VideoDetails>
        <p>
          <h6>About this video</h6>
          <ReadMoreBox text={item.description} />
        </p>
      </VideoDetails>
      <StatsContainer>
        <StatItem>
          <LikeOutlined /> {likes}
        </StatItem>
        <StatItem>
          <EyeOutlined /> {likes}
        </StatItem>
        <StatItem>
          <MessageOutlined /> {likes}
        </StatItem>
      </StatsContainer>
    </>
  )
}

const VideoCard = ({
  name,
  image,
  artist,
  date,
  fest,
  round,
  description,
  likes,
  onOpen,
}) => (
  <StyledCard
    cover={<img alt="example" src={image} onClick={onOpen} />}
    actions={[]}
  >
    <h5 className="mb-0">{name}</h5>
    <FlexRowBetween className="align-items-center">
      <FlexRow>
        <AppAvatar url={image} size={30} title={artist} />
        <div className="ms-2">
          <b>{artist}</b>
        </div>
      </FlexRow>
      <PrimaryButton icon={<StopOutlined />}>Block</PrimaryButton>
    </FlexRowBetween>
    <VideoDetails>
      <p>
        <h6>About this video</h6>
        <ReadMoreBox text={description} />
      </p>
      <p>
        <span>
          {DateUtility.dateToLocalISO(new Date(date), DateFormat.DDMMYYYY)}
        </span>{' '}
        &nbsp;
        <a>{fest}</a> &nbsp;
        <a>{round}</a>
      </p>
    </VideoDetails>
    <StatsContainer>
      <StatItem>
        <LikeOutlined /> {likes}
      </StatItem>
      <StatItem>
        <EyeOutlined /> {likes}
      </StatItem>
      <StatItem>
        <MessageOutlined /> {likes}
      </StatItem>
    </StatsContainer>
  </StyledCard>
)

export const VideosList = () => {
  const { data, filter, pageChanged, total, loading } = GetVideosList()
  const [openModal, setOpenModal] = useState({
    open: false,
    item: {},
  })
  const onOpen = video => {
    setOpenModal({
      open: true,
      item: video,
    })
  }
  return (
    <VideoCardContainer className="row">
      <>
        {loading && <LoaderBar />}
        {data.map(ele => (
          <div className="col-4 mb-5">
            <VideoCard
              image={ele.thumbnail_url}
              name={ele.title}
              artist={ele.creator_id}
              date={ele.createdAt}
              description={ele.description}
              likes={ele.votes?.up?.length}
              videoURL={ele.video_url}
              video={ele}
              onOpen={() => onOpen(ele)}
            />
          </div>
        ))}
      </>
      <VideoModal
        visible={openModal.open}
        onClose={() => setOpenModal({ open: false, item: {} })}
        item={openModal.item}
      />
      <FlexRow className="justify-content-end">
        <CommonPagination
          page={filter.page}
          pageChanged={pageChanged}
          total={total}
        />
      </FlexRow>{' '}
    </VideoCardContainer>
  )
}
