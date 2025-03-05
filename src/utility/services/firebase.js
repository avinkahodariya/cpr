import { initializeApp } from 'firebase/app'
import {
  getAuth,
  sendPasswordResetEmail,
  updatePassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { FirebaseConfig } from 'utility'

export class FirebaseService {
  static app

  static auth

  static init = () => {
    const app = initializeApp(FirebaseConfig)
    FirebaseService.app = app
    FirebaseService.auth = getAuth()
  }

  static signInEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  static continueWithGoogle = () => {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  static updateUserPassword = newPassword => {
    updatePassword(this.auth.currentUser, newPassword)
      .then(data => {
        return data
      })
      .catch(error => {
        return error
      })
  }

  static resetPassword = email => {
    sendPasswordResetEmail(this.auth, email)
  }

  static loginWithAdmin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      const tokenResult = await userCredential.user.getIdTokenResult()
      const { claims } = tokenResult
      if (claims.role !== 'admin') {
        await signOut(this.auth)
        throw new Error('Admin role required')
      }
      return userCredential
    } catch (error) {
      throw new Error('Please Enter Valid Credentials')
    }
  }

  static logOut = async () => {
    await signOut(this.auth)
  }

  static getUser = () => {
    // If no user is signed in, this.auth.currentUser will be null
    return this.auth.currentUser
  }
}
