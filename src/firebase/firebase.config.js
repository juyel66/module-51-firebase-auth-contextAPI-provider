// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAUnp2cn8VInrYsHdmna8vmOVHDxJF4Sg",
  authDomain: "auth-moha-milon-3a5f7.firebaseapp.com",
  projectId: "auth-moha-milon-3a5f7",
  storageBucket: "auth-moha-milon-3a5f7.appspot.com",
  messagingSenderId: "329861837492",
  appId: "1:329861837492:web:d923f457dcae2a9d701de1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;