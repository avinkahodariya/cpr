import { Tabs } from 'antd'
import { ScreenHeader } from 'components'
import {
    AnalyticsLogsTab,
    CompetitionTab,
    ContentModerationTab,
    GenralTab,
    UserManagementTab,
} from 'page-components'
import React, { useMemo, useState } from 'react'
import { SettingsTabScreen } from 'utility'

export const SettingsScreen = () => {
    const [tab, setTab] = useState(SettingsTabScreen.General)
    const items = useMemo(
        () => [
            {
                key: SettingsTabScreen.General,
                label: 'Genral',
                children: <GenralTab />,
            },
            {
                key: SettingsTabScreen.UserManagement,
                label: 'User Management',
                children: <UserManagementTab />,
            },
            {
                key: SettingsTabScreen.Competition,
                label: 'Competition',
                children: <CompetitionTab />,
            },

            {
                key: SettingsTabScreen.ContentModeration,
                label: 'Content Moderation',
                children: <ContentModerationTab />,
            },
            {
                key: SettingsTabScreen.AnalyticsLogs,
                label: 'Analytics & Logs',
                children: <AnalyticsLogsTab />,
            },
        ],
        [],
    )

    return (
        <div>
            <div>
                <ScreenHeader text="Settings" />
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
