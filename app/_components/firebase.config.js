// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7lkq4bu3LqiHftxjWkgyQ6nBNjZdcLCY",
  authDomain: "phone-otp-8cbb1.firebaseapp.com",
  projectId: "phone-otp-8cbb1",
  storageBucket: "phone-otp-8cbb1.appspot.com",
  messagingSenderId: "675996377347",
  appId: "1:675996377347:web:bad1012e50220d96e5c936",
  measurementId: "G-RWCVXCYH4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };