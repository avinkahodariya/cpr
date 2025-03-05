import React from 'react'
import { Card, List, Button } from 'antd'
import {
    CloseOutlined,
    BookOutlined,
    MailOutlined,
    FlagOutlined,
    TrophyOutlined,
    UserAddOutlined,
} from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { FlexRow } from 'components'

const Container = styled.div`
    .ant-card-body {
        padding: 10px;
    }
`

const notifications = [
    {
        icon: <FlagOutlined style={{ fontSize: '24px', color: '#3b82f6' }} />,
        title: 'Flagged Comment by Avin',
        description: 'Comment flagged on video: Test 1. Reason: No.',
        time: '10m ago',
    },
    {
        icon: <TrophyOutlined style={{ fontSize: '24px', color: '#3b82f6' }} />,
        title: 'Test 2 Deadline Approaching',
        description: 'Competition deadline is in 24 hours.',
        time: '1hr ago',
    },
    {
        icon: (
            <UserAddOutlined style={{ fontSize: '24px', color: '#3b82f6' }} />
        ),
        title: 'New Entry for Test 3',
        description: 'Entry submitted by Jinga la la.',
        time: '5hr ago',
    },
    {
        icon: <FlagOutlined style={{ fontSize: '24px', color: '#3b82f6' }} />,
        title: 'Flagged Comment by Nimesh',
        description: 'Comment flagged on video: Vie 3. Reason: Nai kevu le.',
        time: '12hr ago',
    },
]

export const NotificationsScreen = () => {
    return (
        <Container className="container mt-4 px-5">
            <h5 className="text-primary mb-3">Today</h5>
            <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={item => (
                    <Card
                        className="mb-2 shadow-sm rounded-4 border-0"
                        style={{ backgroundColor: '#f8f9fa' }}
                    >
                        <List.Item
                            actions={[
                                <Button type="text" icon={<CloseOutlined />} />,
                                <Button type="text" icon={<BookOutlined />} />,
                                <Button type="text" icon={<MailOutlined />} />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={item.icon}
                                title={
                                    <FlexRow className="align-items-center">
                                        <span className="fw-bold">
                                            {item.title}{' '}
                                        </span>
                                    </FlexRow>
                                }
                                description={<span>{item.description}</span>}
                            />
                            <div className="text-secondary small">
                                {item.time}
                            </div>
                        </List.Item>
                    </Card>
                )}
            />
        </Container>
    )
}
