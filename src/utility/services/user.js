import { BaseService } from './base'
import { APIPath } from 'utility/constant'
import { CommonUtility } from 'utility/common'

class Users {
  createUser(data) {
    return BaseService.post(`${APIPath.users}/create`, data, this.isSecure)
  }

  getUsersList(obj) {
    const params = CommonUtility.objectToParams(obj)
    return BaseService.get(`${APIPath.users}?${params}`, this.isSecure)
  }

  getUserById(id) {
    return BaseService.get(`${APIPath.users}/${id}`, this.isSecure)
  }

  block(id, block) {
    return BaseService.patch(`${APIPath.blockUser}/${id}/${block}`)
  }

  save(data) {
    return BaseService.post(`${APIPath.saveUser}`, data, this.isSecure)
  }

  deleteUser(id) {
    return BaseService.remove(`${APIPath.users}/${id}`, this.isSecure)
  }
}

const UsersService = new Users()
Object.freeze(UsersService)
export { UsersService }
