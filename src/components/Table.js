import React, { useMemo } from 'react'
import { Pagination, Table } from 'antd'
import styled from 'styled-components'
import { CommonConstant, DateFormat, DateUtility } from 'utility'
import { FlexColumn, NoDataFound } from './Common'
import { CaretDown, CaretUp } from 'phosphor-react'

const StyledTableContainer = styled.div`
    padding-top: 16px;
    .custom-table {
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;

        .ant-table-thead > tr > th {
            background: #fff;
            color: ${({ theme }) => theme.colors.primary} !important;
            text-align: center;
            font-weight: bold;
            border-bottom: none !important;
        }

        .ant-table-cell::before {
            height: 0 !important;
        }

        .ant-table-tbody > tr > td {
            text-align: center;
            border-bottom: 1px solid #f0f0f0;
        }

        .ant-table-tbody > tr:hover > td {
            background-color: #e6f7ff;
        }

        .ant-tag {
            font-size: 14px;
        }
    }
`
export const CustomTable = ({
    columns,
    data = [],
    pageChanged,
    page,
    loading,
    pageSize,
    total,
}) => {
    const columnsList = useMemo(() => {
        return columns.map(ele => {
            let column = { ...ele }
            if (!ele.sorter && ele.sort !== false) {
                if (ele.date) {
                    column.sorter = (a, b) =>
                        new Date(a[ele.dataIndex]) - new Date(b[ele.dataIndex])
                } else if (typeof data[0]?.[ele.dataIndex] === 'string') {
                    column.sorter = (a, b) =>
                        (a[ele.dataIndex] || '').localeCompare(
                            b[ele.dataIndex] || '',
                        )
                } else if (typeof data[0]?.[ele.dataIndex] === 'number') {
                    column.sorter = (a, b) =>
                        (a[ele.dataIndex] || 0) - (b[ele.dataIndex] || 0)
                }
                column.sortIcon = sortingObj => {
                    let icon = null
                    switch (sortingObj.sortOrder) {
                        case 'ascend':
                            icon = <CaretUp />
                            break
                        case 'descend':
                            icon = <CaretDown />
                            break
                        default:
                            icon = (
                                <FlexColumn>
                                    <CaretUp />
                                    <CaretDown />
                                </FlexColumn>
                            )
                    }
                    return icon
                }
            }
            if (ele.date) {
                column = {
                    ...column,
                    render: text => (
                        <>
                            {DateUtility.dateToLocalISO(
                                new Date(text),
                                DateFormat.DDMMYYYY,
                            )}
                        </>
                    ),
                }
            }
            return column
        })
    }, [columns])
    return (
        <StyledTableContainer>
            <>
                {data.length === 0 ? (
                    <NoDataFound />
                ) : (
                    <Table
                        className="custom-table"
                        columns={columnsList}
                        dataSource={data || []}
                        scroll={{ x: 'max-content' }}
                        size="small"
                        pagination={false} // Disable built-in pagination
                        style={{ width: '100%' }}
                        loading={loading}
                    />
                )}
            </>
            <div className="mt-4 d-flex justify-content-end">
                <CommonPagination
                    page={page}
                    pageSize={pageSize}
                    total={total} // Total number of records
                    onChange={pageChanged}
                />
            </div>
        </StyledTableContainer>
    )
}

export const CommonPagination = ({ page, pageSize, total, pageChanged }) => {
    return (
        <Pagination
            current={page + 1}
            pageSize={pageSize || CommonConstant.defaultPageSize}
            total={total} // Total number of records
            onChange={page => pageChanged(page - 1)}
        />
    )
}
