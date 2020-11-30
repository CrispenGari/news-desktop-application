import firebase from 'firebase'

const firebaseConfig ={}
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebaseApp.auth()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  export {googleAuthProvider, auth}