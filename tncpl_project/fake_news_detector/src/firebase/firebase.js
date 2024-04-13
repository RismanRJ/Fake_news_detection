// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCC2L442EMhBNnFVHtSkRRB7PIhyQ-4iw",
  authDomain: "loginauth-26864.firebaseapp.com",
  projectId: "loginauth-26864",
  storageBucket: "loginauth-26864.appspot.com",
  messagingSenderId: "560330170420",
  appId: "1:560330170420:web:04393b55c01c54e529ea61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getfirestore(app)

export{app,firestore}