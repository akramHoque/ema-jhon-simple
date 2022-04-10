// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1iGqdSbydWmDg6KX2qaIO7ckCIX3C6UU",
  authDomain: "ema-john-simples-cf843.firebaseapp.com",
  projectId: "ema-john-simples-cf843",
  storageBucket: "ema-john-simples-cf843.appspot.com",
  messagingSenderId: "187417075888",
  appId: "1:187417075888:web:e2ccc4a400d4b283461b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth ;