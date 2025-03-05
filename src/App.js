import React, { useMemo } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { PageUnderDevelopment, ScrollToTop } from 'components'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/reset.css' // For Ant Design v5
import {
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  ForgotScreen,
  ConfirmCodeScreen,
  DashBoardScreen,
  CourcesScreen,
  ProfileScreen,
} from 'screens'
import { AuthProvider } from 'context'
import { useDarkMode } from 'hooks'
import { darkTheme, lightTheme } from 'theme'
import { ProcessingScreen } from 'screens/proccessing'
import { AppLayout, AuthAppLayout } from 'layout'
import { CourceDetailScreen } from 'screens/auth/cources'

function App() {
  const [theme] = useDarkMode()
  const themeMode = useMemo(
    () => (theme === 'light' ? lightTheme : darkTheme),
    [theme],
  )
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={themeMode}>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/redirect" element={<ProcessingScreen />} />{' '}
            <Route path="/forgot-password" element={<ForgotScreen />} />
            <Route path="/confirm-code" element={<ConfirmCodeScreen />} />
            <Route path="/" element={<Navigate replace to="home" />} />
            <Route element={<AppLayout />}>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/courses" element={<HomeScreen />} />
              <Route path="*" element={<PageUnderDevelopment />} />
            </Route>
            <Route
              path="/app"
              element={
                <AuthAppLayout>
                  <Outlet />
                </AuthAppLayout>
              }
            >
              <Route path="" element={<DashBoardScreen />} />
              <Route path="courses" element={<Outlet />}>
                <Route index element={<CourcesScreen />} />
                <Route path=":id" element={<Outlet />}>
                  <Route index element={<CourceDetailScreen />} />
                  <Route path="enroll" element={<CourceDetailScreen />} />
                </Route>
              </Route>

              <Route path="profile-settings" element={<ProfileScreen />} />
              <Route path="*" element={<PageUnderDevelopment />} />
            </Route>
            <Route path="*" element={<PageUnderDevelopment />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
