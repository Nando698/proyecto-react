// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo3PVdicwwKgal6QPsf15HnGTz3Kc--y4",
  authDomain: "proyecto-react-fdiaz.firebaseapp.com",
  projectId: "proyecto-react-fdiaz",
  storageBucket: "proyecto-react-fdiaz.appspot.com",
  messagingSenderId: "761232582620",
  appId: "1:761232582620:web:d84d0e268ab7bcf6e3d119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database