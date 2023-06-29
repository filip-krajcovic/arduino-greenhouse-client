import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseOptions } from './firebase.options'

console.log('firebase options', firebaseOptions)

export const firebaseApp = initializeApp(firebaseOptions)


export const firestore = getFirestore(firebaseApp)