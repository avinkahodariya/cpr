import React, { useEffect, useMemo, useState } from 'react'
import { ScreenHeader } from 'components'
import { useNavigate, useParams } from 'react-router-dom'
import { GetCompetitionById } from 'hooks'
import { notification, Tabs } from 'antd'
import {
    CompetitionsRoundsTabAddEdit,
    CompetitionsTabAddEdit,
} from 'page-components'
import {
    CommonConstant,
    CompetitionService,
    CompetitionTabScreen,
} from 'utility'

export const CompetitionsAddEditScreen = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data } = GetCompetitionById(id)
    const [submitData, setSubmitData] = useState({})
    const [tab, setTab] = useState('1')
    const onNext = async (screen, formdata) => {
        const submitFormData = {
            ...submitData,
            ...formdata,
        }
        setSubmitData(submitFormData)
        if (screen === CompetitionTabScreen.Rounds) {
            try {
                if (data?._id) {
                    await CompetitionService.patch(data._id, {
                        ...submitFormData,
                        _id: undefined,
                        rounds: submitFormData.rounds.map((ele, index) => ({
                            ...ele,
                            round_number: index,
                        })),
                    })
                } else {
                    await CompetitionService.add({
                        ...submitFormData,
                        rounds: submitFormData.rounds.map((ele, index) => ({
                            ...ele,
                            round_number: index,
                        })),
                    })
                }
                navigate('/app/competitions')
            } catch (error) {
                notification.error({
                    description: error.toString(),
                    message: CommonConstant.error,
                })
            }
        }
        if (screen === CompetitionTabScreen.Common) {
            setTab('2')
        }
    }

    useEffect(() => {
        if (data?._id) {
            setSubmitData({
                ...data,
            })
        }
    }, [data])
    const items = useMemo(
        () => [
            {
                key: '1',
                label: 'Competitions',
                children: (
                    <CompetitionsTabAddEdit data={submitData} onNext={onNext} />
                ),
            },
            {
                key: '2',
                label: 'Rounds',
                children: (
                    <CompetitionsRoundsTabAddEdit
                        data={submitData}
                        onNext={onNext}
                    />
                ),
            },
        ],
        [submitData],
    )

    return (
        <div>
            <ScreenHeader
                text={
                    !id
                        ? 'Add New Competitions Details'
                        : 'Edit Competitions Details'
                }
            />
            <div className="px-5">
                <Tabs
                    defaultActiveKey="1"
                    activeKey={tab}
                    items={items}
                    onChange={key => setTab(key)}
                />
            </div>
        </div>
    )
}
