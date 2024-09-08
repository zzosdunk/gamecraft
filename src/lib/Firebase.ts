import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKFnmn6ykjvORY0TYwHsaCTPtlQvLAQUQ",
  authDomain: "shop-27b0f.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DB_LINK,
  projectId: "shop-27b0f",
  storageBucket: "shop-27b0f.appspot.com",
  messagingSenderId: "230665518867",
  appId: "1:230665518867:web:42169b1bf2f53e9bbe24e6",
  measurementId: "G-YMDLS5YT9L",
};

export const app = initializeApp(firebaseConfig);
