import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBGUYogXRQ17FNj_IF5aZP5N95315ih-pc",
  authDomain: "netflix-7c7b0.firebaseapp.com",
  projectId: "netflix-7c7b0",
  storageBucket: "netflix-7c7b0.appspot.com",
  messagingSenderId: "430665217214",
  appId: "1:430665217214:web:8eec31302d5fe217cd5aef",
  measurementId: "G-QFF1C24J66"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

// this file was not added