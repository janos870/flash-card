// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flash-card-e966a.firebaseapp.com",
  projectId: "flash-card-e966a",
  storageBucket: "flash-card-e966a.appspot.com",
  messagingSenderId: "106199270212",
  appId: "1:106199270212:web:489c0cc6db7cdab7a3cd11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);