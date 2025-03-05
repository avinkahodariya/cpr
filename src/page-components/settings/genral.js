import {
    FlexColumn,
    FlexRow,
    FlexRowBetween,
    Line,
    PrimaryButton,
} from 'components'
import { useAuth } from 'context'
import { CaretRight } from 'phosphor-react'
import React from 'react'

export const GenralTab = () => {
    const { user } = useAuth()
    return (
        <div>
            <FlexRowBetween>
                <FlexColumn>
                    <h3>Contacts</h3>
                    <FlexColumn>
                        <FlexRow>
                            <h4>Phone: </h4>
                            <h3 className="ms-2">{user?.phoneNumber}</h3>
                        </FlexRow>
                        <FlexRow className="align-items-center">
                            <h4>Mail: </h4>
                            <h3 className="ms-2">{user?.email}</h3>
                        </FlexRow>
                    </FlexColumn>
                </FlexColumn>
                <PrimaryButton>Edit</PrimaryButton>
            </FlexRowBetween>
            <Line className="my-3" />
            <FlexRowBetween>
                <FlexColumn>
                    <h3>Change Password</h3>
                    <h3 className="ms-2">************</h3>
                </FlexColumn>
                <PrimaryButton>Edit</PrimaryButton>
            </FlexRowBetween>
            <Line className="my-3" />
            <FlexRowBetween>
                <FlexColumn>
                    <h3>Supported Language</h3>
                    <h3 className="ms-2">English</h3>
                </FlexColumn>
                <PrimaryButton>Edit</PrimaryButton>
            </FlexRowBetween>
            <Line className="my-3" />
            <FlexRowBetween>
                <FlexColumn>
                    <h3>Time Zone Settings</h3>
                    <h3 className="ms-2">English</h3>
                </FlexColumn>
                <PrimaryButton>Edit</PrimaryButton>
            </FlexRowBetween>
            <Line className="my-3" />
            <FlexRowBetween>
                <FlexColumn>
                    <h3>Default Language</h3>
                    <h3 className="ms-2">English</h3>
                </FlexColumn>
                <PrimaryButton>Edit</PrimaryButton>
            </FlexRowBetween>
            <Line className="my-3" />
            <FlexRowBetween>
                <FlexColumn>
                    <h3>Maintenance Mode</h3>
                </FlexColumn>
                <CaretRight />
            </FlexRowBetween>
            <Line className="my-3" />
        </div>
    )
}
