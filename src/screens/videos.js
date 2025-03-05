import { Tabs } from 'antd'
import { FlexRowBetween, ScreenHeader } from 'components'
import { VideosList } from 'page-components'
import { Funnel } from 'phosphor-react'
import React, { useMemo, useState } from 'react'
import { VideosTabScreen } from 'utility'

export const VideosScreen = () => {
    const [tab, setTab] = useState(VideosTabScreen.All)
    const items = useMemo(
        () => [
            {
                key: VideosTabScreen.All,
                label: 'All',
                children: <VideosList />,
            },
            {
                key: VideosTabScreen.Reported,
                label: 'Reported',
                children: <VideosList />,
            },
            {
                key: VideosTabScreen.Approved,
                label: 'Approved',
                children: <VideosList />,
            },

            {
                key: VideosTabScreen.Disapproved,
                label: 'Disapproved',
                children: <VideosList />,
            },
            {
                key: VideosTabScreen.Blocked,
                label: 'Blocked',
                children: <VideosList />,
            },
        ],
        [],
    )
    return (
        <div>
            <ScreenHeader text="List of Videos" />
            <div className="px-3">
                <FlexRowBetween>
                    <h5>
                        Sort By: <span>Name</span>
                    </h5>
                    <span>
                        <Funnel size={26} />
                    </span>
                </FlexRowBetween>
                <div className="px-5">
                    <Tabs
                        defaultActiveKey="1"
                        activeKey={tab}
                        items={items}
                        onChange={key => setTab(key)}
                    />
                </div>
            </div>
        </div>
    )
}
