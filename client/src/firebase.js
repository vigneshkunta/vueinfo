// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zonix-cae22.firebaseapp.com",
  projectId: "zonix-cae22",
  storageBucket: "zonix-cae22.appspot.com",
  messagingSenderId: "535475611811",
  appId: "1:535475611811:web:1cbe40b20976fe477bb716"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

