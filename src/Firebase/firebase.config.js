// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgE3NMzKptHi9NAhRio7_gsLmxYKhCUFc",
  authDomain: "react-dragon-news-auth-87f70.firebaseapp.com",
  projectId: "react-dragon-news-auth-87f70",
  storageBucket: "react-dragon-news-auth-87f70.appspot.com",
  messagingSenderId: "58668749459",
  appId: "1:58668749459:web:ef9c1e4cc0d98b98313366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;