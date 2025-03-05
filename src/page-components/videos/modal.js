import React from 'react'
import { Modal, Tabs, List } from 'antd'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { VideoDetailSection } from './list'
import { AppAvatar } from 'components'

const { TabPane } = Tabs

const CommentSection = () => {
    return (
        <ScrollableCommentSection>
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<AppAvatar title={item.name} />}
                            title={`${item.name} • ${item.time}`}
                            description={item.text}
                        />
                    </List.Item>
                )}
            />
        </ScrollableCommentSection>
    )
}

const comments = [
    {
        name: 'Devon Lane',
        time: '8h',
        text: 'Such a vibe! Love the energy in this track.🌟🕺',
    },
    {
        name: 'Darlene Robertson',
        time: '1d',
        text: 'Does anyone else feel like this could be the soundtrack to a movie? 😱🎧',
    },
    { name: 'Kathryn Murphy', time: '13h', text: 'Headphones ON!!!' },
    {
        name: 'Gwendoline Christie',
        time: '16h',
        text: 'Vibing this with my dog.',
    },
    {
        name: 'Kevin Eleven',
        time: '2d',
        text: 'Love how the vocals blend perfectly with the instrumental—so smooth! 😎',
    },
    {
        name: 'Marvin McKinney',
        time: '1d',
        text: 'Can we just appreciate how this video captures the mood perfectly? Thoughts? 🤔',
    },
    { name: 'Jacob Jones', time: '22h', text: 'Just made my day' },
    {
        name: 'Bessie Cooper',
        time: '1d',
        text: 'This is my new anthem for every mood. 🎧🌟',
    },
    {
        name: 'Ralph Edwards',
        time: '1d',
        text: 'This deserves way more views. Incredible work! 👊',
    },
]
export const VideoModal = ({ visible, onClose, item }) => {
    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            width={1000}
            centered
        >
            <Container>
                <VideoSection>
                    <ReactPlayer
                        url={item?.video_url}
                        controls
                        playing
                        width="100%"
                        height="100%"
                        type="video/mp4"
                    />
                </VideoSection>
                <DetailsSection>
                    <Tabs defaultActiveKey="2">
                        <TabPane tab="Details" key="1">
                            <VideoDetailSection item={item} />
                        </TabPane>
                        <TabPane tab="Comments" key="2">
                            <CommentSection item={item} />
                        </TabPane>
                    </Tabs>
                </DetailsSection>
            </Container>
        </Modal>
    )
}

const Container = styled.div`
    display: flex;
    height: 600px;
`

const VideoSection = styled.div`
    width: 60%;
    height: 100%;
`

const DetailsSection = styled.div`
    width: 40%;
    background: white;
    padding: 16px;
    overflow-y: auto;
`
const ScrollableCommentSection = styled.div`
    max-height: 520px;
    overflow-y: auto;
`
