import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import React from 'react'
import styled from 'styled-components'

const BlockText = styled.div`
    color: ${({ theme, blocked }) =>
        !blocked ? theme.colors.danger : theme.colors.primary};
    cursor: pointer;
`

export const ActionBox = ({ onEdit, onDelete, onBlock, item }) => {
    return (
        <div>
            {' '}
            <div className="d-flex">
                {onEdit && (
                    <Button default onClick={() => onEdit()} className="me-3">
                        <EditOutlined />
                    </Button>
                )}
                {onDelete && (
                    <Popconfirm
                        title="Are you sure want to delete?"
                        onConfirm={() => onDelete()}
                    >
                        <Button danger>
                            <DeleteOutlined />
                        </Button>
                    </Popconfirm>
                )}
                {onBlock && (
                    <Popconfirm
                        title="Are you sure want to block ?"
                        onConfirm={() => onBlock()}
                    >
                        <BlockText blocked={item.isBlocked}>
                            {!item.isBlocked ? 'Block' : 'Unblock'}
                        </BlockText>
                    </Popconfirm>
                )}
            </div>
        </div>
    )
}
