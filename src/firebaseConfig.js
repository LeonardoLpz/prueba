import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDB5sDAK33KSsOzNSC61EWRPrJyo45TrPI',
  authDomain: 'mobilender-549ff.firebaseapp.com',
  projectId: 'mobilender-549ff',
  storageBucket: 'mobilender-549ff.appspot.com',
  messagingSenderId: '879104797669',
  appId: '1:879104797669:web:2218ac62101cdcd241dd0c',
  measurementId: 'G-SGZBQK6H3T'
}
firebase.initializeApp(firebaseConfig)

export default firebase
