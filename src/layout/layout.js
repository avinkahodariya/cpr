import React from 'react'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Images } from 'assets'
import { useAuth } from 'context'
import { FlexRow, GreenButton, BorderButton } from 'components'
import Sider from 'antd/es/layout/Sider'
import { Headset, SignOut, UserCircleGear } from 'phosphor-react'
import {
  Certificate,
  HandCoins,
  SquaresFour,
  Video,
} from '@phosphor-icons/react'

const StyledLayout = styled(Layout)`
    max-width: 100vw;
    height: 100vh;
    overflow: auto;
    flex-direction: column;
    .ant-layout-header  {
        background: #0D1B1E;
    }
  .ant-layout-content {
    background: ${({ theme }) => theme.colors.primaryDark};
    width: 100%
  }

  @media (max-width: 768px) {
    .ant-layout-sider {
      display: none;
    }

    @media (max-width: 768px) {
        .ant-layout-sider {
            display: none;
        }
    }
`
const StyledAuthLayout = styled(StyledLayout)`
  flex-direction: row;
  .auth-logo {
    box-shadow: 0px 2px 200.9px -120px #22a354 inset !important;
  }
`
const MenuStyled = styled(Menu)`
  background: #0d1b1e;
  color: ${({ theme }) => theme.colors.white} !important;
  .ant-menu-item,
  .ant-menu-submenu-title {
    &:hover {
      color: ${({ theme }) => theme.colors.white} !important;
      font-weight: bold;
    }
  }
  .ant-menu-title-content {
    color: ${({ theme }) => theme.colors.white} !important;
  }
  .ant-menu-item-active {
    color: ${({ theme }) => theme.colors.white} !important;
    font-weight: bold !important;
  }
`

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white} !important;
  padding: 10px;
  background: #0d1b1e;
  img {
    width: 100%;
    max-width: 50px;
    height: auto;
  }
`

const menuItems = [
  { key: 'home', label: 'Home' },
  {
    key: 'courses',
    label: 'Courses',
  },
  {
    key: 'how-we-work',
    label: 'How we work',
  },
  {
    key: 'testimonials',
    label: 'Testimonials',
  },
  {
    key: 'Certifications',
    label: 'certifications',
  },
]

const menuAuthItems = [
  {
    key: '',
    label: 'Dashboard',
    icon: <SquaresFour size={20} color="#FFFFFF" />,
  },
  {
    key: 'courses',
    icon: <Video size={20} color="#FFFFFF" />,
    label: 'Courses',
  },
  {
    key: 'practice-certifications',
    label: 'Practice & Certification',
    icon: <Certificate size={20} color="#FFFFFF" />,
  },
  {
    key: 'payment-reward',
    icon: <HandCoins size={20} color="#FFFFFF" />,
    label: 'Payment & Rewards',
  },
  {
    key: 'resources-support',
    label: 'Resources & Support',
    icon: <Headset size={20} color="#FFFFFF" />,
  },
  {
    key: 'profile-settings',
    label: 'Profile & Settings',
    icon: <UserCircleGear size={20} color="#FFFFFF" />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <SignOut size={20} color="#FFFFFF" />,
  },
]

const RightLayout = styled.div`
  border-inline-start: 1px solid rgba(5, 5, 5, 0.06);
  background: ${({ theme }) => theme.colors.primaryDark};
`
const AuthRightLayout = styled.div`
  border-inline-start: 1px solid rgba(5, 5, 5, 0.06);
  background: #091c23;
  overflow-y: auto;
`
const logoutItem = [
  {
    key: 'logout',
    label: 'Logout',
    icon: <SignOut size={20} color="#FFFFFF" />,
  },
]
export const AppLayout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const selectedKey = location.pathname.split('/')[1] || 'home'

  return (
    <StyledLayout>
      <Layout.Header style={{ display: 'flex' }}>
        <LogoWrapper>
          <img src={Images.Logo} alt="Logo" />
          <h4 className="mb-0 ms-3">CPR</h4>
        </LogoWrapper>

        <MenuStyled
          className=""
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={[selectedKey]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0, justifyContent: 'center' }}
          onSelect={item => {
            navigate(`/${item.key}`)
          }}
        >
          {false && (
            <MenuStyled
              mode="inline"
              items={logoutItem}
              onSelect={item => {
                if (item.key === 'logout') {
                  logout()
                }
              }}
            />
          )}
          {/* <Menu.Item
                        key="logout"
                        icon={<LogoutOutlined />}
                        onClick={() => {
                            AuthService.logout()
                        }}
                    >
                        Logout
                    </Menu.Item> */}
        </MenuStyled>
        <FlexRow className=" align-items-center">
          <GreenButton onClick={() => navigate('/login')}>Login</GreenButton>
          <BorderButton
            onClick={() => navigate('/signup')}
            color="#23A455"
            type="outlined"
            className="ms-2"
          >
            Sign Up
          </BorderButton>
        </FlexRow>
      </Layout.Header>
      <RightLayout>
        <Outlet />
      </RightLayout>
      <StyledFooter className="pt-4">
        <FlexRow className="justify-content-center gap-3">
          <p>About Us</p>
          <p>Contact</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </FlexRow>
        <FlexRow className="justify-content-center gap-5 mb-3">
          <img src={Images.FB} alt="" className="icon" />
          <img src={Images.LinkedIn} alt="" className="icon linked" />
        </FlexRow>
        <p>© {new Date().getFullYear()} CPR4Life. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy Policy</a> |{' '}
          <a href="#terms">Terms &amp; Conditions</a>
        </p>
      </StyledFooter>
    </StyledLayout>
  )
}

const SliderAuthStyled = styled(Sider)`
  box-shadow: 0px 2px 200.9px -120px #22a354 inset;
  height: 100vh;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.sideBarBackground};
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  .ant-menu {
    border-inline-end: 0 !important;
    background: ${({ theme }) => theme.colors.sideBarBackground};
    height: 90vh;
  }
  .ant-menu {
    border-inline-end: 0 !important;
    background: ${({ theme }) => theme.colors.sideBarBackground};
    height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 200.9px -120px #22a354 inset !important;
  }

  .ant-menu-item:last-child {
    margin-top: auto;
  }

  .ant-menu-item {
    padding-block: 25px;
  }
  .ant-menu-item-selected {
    background: transparent !important;
    .ant-menu-title-content {
      color: ${({ theme }) => theme.colors.textGreen} !important;
    }
  }
  flex: 0 0 240px !important; /* Prevents shrinking */
  .ant-layout-sider-children {
    background: ${({ theme }) => theme.colors.sideBarBackground};
    display: flex !important;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    border-right: 4px solid #ffffff1a;
  }
`

const ScrollableContainer = styled.div`
  overflow-y: scroll;
  scrollbar-width: thin;
`

export const AuthAppLayout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const selectedKey = location.pathname.split('/app/')[1] || 'dashboard'
  return (
    <StyledAuthLayout>
      <SliderAuthStyled collapsedWidth={0} width={240}>
        <div>
          <LogoWrapper className="auth-logo">
            <img src={Images.Logo} alt="Logo" />
            <h4 className="mb-0 ms-3">CPR</h4>
          </LogoWrapper>
          <MenuStyled
            mode="inline"
            defaultSelectedKeys={['dashboard']}
            selectedKeys={[selectedKey]}
            items={menuAuthItems}
            onSelect={item => {
              if (item.key === 'logout') {
                logout()
              } else {
                navigate(`/app/${item.key}`)
              }
            }}
          >
            {/* <Menu.Item
                        key="logout"
                        icon={<LogoutOutlined />}
                        onClick={() => {
                            AuthService.logout()
                        }}
                    >
                        Logout
                    </Menu.Item> */}
          </MenuStyled>
        </div>
        {false && (
          <MenuStyled
            mode="inline"
            items={logoutItem}
            onSelect={item => {
              if (item.key === 'logout') {
                logout()
              }
            }}
          />
        )}
      </SliderAuthStyled>
      <AuthRightLayout className="col">
        <ScrollableContainer>
          <Outlet />
        </ScrollableContainer>
      </AuthRightLayout>
    </StyledAuthLayout>
  )
}

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark} !important;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  .icon {
    width: 36px;
    height: 36px;
  }
  .linked {
    width: 36px;
    height: 34px;
  }
`
