const basePath = process.env.REACT_APP_API_PATH

export const APIPath = {
  server: basePath,
  // auth
  auth: 'auth/login',
  googleLogin: 'auth/google',
  competitions: 'competitions',
  adminCompetitions: 'competitions/admin',
  creators: 'creators',
  viewers: 'viewers',
  blockUser: 'users/block',
  videos: 'videos',
  me: 'users/me',
  saveUser: 'users/save',
  login: `${basePath}auth/login`,
  register: `${basePath}auth/register`,
  setPassword: 'user/UpdatePassword',
  validateToken: `${basePath}users/ValidateToken`,
  forgotPassword: 'ForgotPassword',
  socialLogin: 'Users/ValidateProviderToken',
  checkUserExists: 'checkUserExists',
  forgetPassword: `${basePath}auth/forget-password`,
  resendToken: `${basePath}auth/resend-token`,
  verifyToken: `${basePath}auth/verify-reset-token`,
  resetPassword: `${basePath}auth/reset-password`,
  refreshToken: `${basePath}auth/refresh-token`,
  getSignedURL: `${basePath}aws/singed-url`,
}
