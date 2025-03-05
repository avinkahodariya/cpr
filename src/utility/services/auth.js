import { BaseService } from './base'
import { BrowserUtility } from '../browser-utility'
import { APIPath, StorageConstant } from 'utility/constant'

class Auth {
  // async checkUserExists(email) {
  //     try {
  //         const response = await BaseService.get(`${APIPath.CHECK_USER_EXISTS}?email=${email}`);
  //         return response.data.exists;
  //     } catch (error) {
  //         throw new Error('Error checking user existence');
  //     }
  // }

  signInWithGoogle() {
    window.location.href = 'http://localhost:5100/api/auth/google'
    return BaseService.get(APIPath.googleLogin)
  }

  login(reqData) {
    return BaseService.post(APIPath.login, reqData, false)
  }

  me(reqData) {
    return BaseService.get(APIPath.me, reqData)
  }

  register(reqData) {
    const params = {
      ...reqData,
      // Source: 'Web',
    }

    return BaseService.post(APIPath.register, params, false)
  }

  validateSocialToken(token) {
    return BaseService.post(`${APIPath.socialLogin}?Token=${token}`, null)
  }

  resetPassword(reqData) {
    return BaseService.post(`${APIPath.resetPassword}`, reqData)
  }

  verifyToken(reqData) {
    return BaseService.post(`${APIPath.verifyToken}`, reqData)
  }

  refreshToken(reqData) {
    return BaseService.post(`${APIPath.refreshToken}`, reqData)
  }

  resendToken(reqData) {
    return BaseService.post(`${APIPath.resendToken}`, reqData)
  }

  forgetPassword(reqData) {
    return BaseService.post(`${APIPath.forgetPassword}`, reqData)
  }

  storeToken(token) {
    BrowserUtility.save(StorageConstant.token, token)
  }

  async saveUser(user) {
    await BrowserUtility.save(StorageConstant.user, JSON.stringify(user))
    if (user.Token) {
      await BrowserUtility.save(StorageConstant.token, user.Token)
    }
  }

  storeWishList() {
    BrowserUtility.saveObj('WishList', [])
  }

  storeUser(user) {
    BrowserUtility.saveObj(StorageConstant.user, user)
  }

  getToken() {
    return BrowserUtility.get(StorageConstant.token) || ''
  }

  getUser() {
    return BrowserUtility.getObj(StorageConstant.user)
  }

  showNCReport() {
    const user = AuthService.getUser()
    return user.CompanyId === 28065
  }

  logout() {
    BrowserUtility.remove(StorageConstant.token)
    BrowserUtility.remove(StorageConstant.IsAuthenticated)
    BrowserUtility.remove(StorageConstant.user)
  }

  isAuthenticated() {
    const token = this.getToken()
    return !!token
  }

  hasRoles(roles = [], userRoles = []) {
    return roles.some(x => (userRoles || []).some(y => y === x))
  }
}

const AuthService = new Auth()
Object.freeze(AuthService)
export { AuthService }
