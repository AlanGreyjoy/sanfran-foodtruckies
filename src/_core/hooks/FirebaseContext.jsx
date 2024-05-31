// src/FirebaseContext.js

import { createContext, useContext } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/analytics'
import 'firebase/compat/storage'

import firebaseConfig from 'src/configs/firebaseConfig'

firebase.initializeApp(firebaseConfig)

const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({ children }) => {
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  const analytics = firebase.analytics()
  const storage = firebase.storage()

  const value = {
    firebase,
    auth,
    firestore,
    analytics,
    storage
  }

  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
}

export default FirebaseProvider
