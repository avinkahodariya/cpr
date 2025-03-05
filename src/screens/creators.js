import { notification } from 'antd'
import { CustomTable, FlexRowBetween, ScreenHeader } from 'components'
import { ActionBox } from 'components/ActionBox'
import { GetCreatorsList } from 'hooks'
import { Funnel } from 'phosphor-react'
import React from 'react'
import { CommonConstant, CompetitionService } from 'utility'

export const CreatorsScreen = () => {
    const { data, filter, pageChanged, total, loading } = GetCreatorsList()
    const onDelete = async id => {
        try {
            await CompetitionService.remove(id)
        } catch (error) {
            notification.error({
                description: error.toString(),
                message: CommonConstant.error,
            })
        }
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
            key: 'name',
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            date: true,
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
            date: true,
        },
        {
            title: 'Participants Limit',
            dataIndex: 'participants_limit',
            key: 'participants_limit',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => (
                <ActionBox onBlock={() => onDelete(record._id)} />
            ),
        },
    ]
    return (
        <div>
            <ScreenHeader text="List of Creators" />
            <div className="px-3">
                <FlexRowBetween>
                    <h5>
                        Sort By: <span>Name</span>
                    </h5>
                    <span>
                        <Funnel size={26} />
                    </span>
                </FlexRowBetween>
                <CustomTable
                    data={data}
                    columns={columns}
                    pageChanged={pageChanged}
                    page={filter.page}
                    loading={loading}
                    total={total}
                />
            </div>
        </div>
    )
}
