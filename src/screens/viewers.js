import { CustomTable, FlexRowBetween, ScreenHeader } from 'components'
import { ActionBox } from 'components/ActionBox'
import { GetViewersList } from 'hooks'
import { Funnel } from 'phosphor-react'
import React from 'react'
import { UsersService } from 'utility'

export const ViewersScreen = () => {
    const { data, filter, pageChanged, total, loading, setData } =
        GetViewersList()
    const onBlock = async record => {
        try {
            await UsersService.block(record.firebase_uid, !record.isBlocked)
            setData(
                data.map(ele => ({
                    ...ele,
                    isBlocked:
                        ele.firebase_uid === record.firebase_uid
                            ? !ele.isBlocked
                            : ele.isBlocked,
                })),
            )
        } catch (error) {
            console.log('error', error)
        }
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sort: true, // Uses centralized alphabetical sorting
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            sort: true,
        },
        {
            title: 'Birth Date',
            dataIndex: 'birth_date',
            key: 'birth_date',
            date: true,
            sort: true,
        },
        {
            title: 'Votes',
            dataIndex: 'votes',
            key: 'votes',
            sort: true,
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
            sort: true,
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            sort: false, // No sorting for this column
            render: (_, record) => (
                <ActionBox item={record} onBlock={() => onBlock(record)} />
            ),
        },
    ]
    return (
        <div>
            <ScreenHeader text="List of Viewers" />
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
