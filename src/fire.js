import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAyOTyWMHCEIqRiuI6NSahJa7BZT6pFS9k",
  authDomain: "grubinator-57ca5.firebaseapp.com",
  databaseURL: "https://grubinator-57ca5.firebaseio.com",
  projectId: "grubinator-57ca5",
  storageBucket: "grubinator-57ca5.appspot.com",
  messagingSenderId: "457800826841"
}

const fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;