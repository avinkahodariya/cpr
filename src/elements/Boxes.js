import { Layout } from 'antd'
import { AppAvatar } from 'components'
import { useAuth } from 'context'
import { Notification } from 'phosphor-react'
import React from 'react'
import styled from 'styled-components'
import { CommonUtility } from 'utility'

const HeaderContainer = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  position: absolute;
  width: -webkit-fill-available;
  color: #fff;
  height: 100px;
  background: #1f1f1f80;
  box-shadow: 0px 0px 200.9px -120px #22a354 inset;
  z-index: 99999;
  top: 0px;
  .ant-layout-header {
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Icon = styled.div`
  font-size: 24px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: #a0a0a0;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const Divider = styled.div`
  height: 40px;
  width: 2px;
  background-color: #1c8b5e;
`

const NotificationIcon = styled(Notification)`
  font-size: 20px;
  color: #1c8b5e;
  cursor: pointer;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`

const UserEmail = styled.p`
  font-size: 12px;
  color: #a0a0a0;
`

export const PageHeader = ({ title, subTitle }) => {
  const { user } = useAuth()
  return (
    <HeaderContainer>
      <LeftSection>
        <Icon>📚</Icon>
        <TitleContainer>
          <Title className="mb-0">{title}</Title>
          <Subtitle className="mb-0">{subTitle}</Subtitle>
        </TitleContainer>
      </LeftSection>

      <RightSection>
        <Divider />
        <NotificationIcon />
        <Profile>
          <AppAvatar size={40} url={user?.image} title={user?.firstname} />
          <UserDetails>
            <UserName className="mb-0">
              {CommonUtility.toTitleCase(
                `${user?.firstname || ''} ${user?.lastname || ''}`,
              )}
            </UserName>
            <UserEmail className="mb-0">{user?.emailID}</UserEmail>
          </UserDetails>
        </Profile>
      </RightSection>
    </HeaderContainer>
  )
}
