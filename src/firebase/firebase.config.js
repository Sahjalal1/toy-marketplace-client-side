// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-nEEQjFmHAGeUGPWY4qHFL6p_kw2l9wI",
  authDomain: "toy-shop-auth.firebaseapp.com",
  projectId: "toy-shop-auth",
  storageBucket: "toy-shop-auth.appspot.com",
  messagingSenderId: "252637327502",
  appId: "1:252637327502:web:0b7aa63389adf8fe8399df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;