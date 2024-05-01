// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6JpdYvXzlHj0rNtrsGmKBBnGbh6l6mLo",
  authDomain: "foodapp-17ccc.firebaseapp.com",
  projectId: "foodapp-17ccc",
  storageBucket: "foodapp-17ccc.appspot.com",
  messagingSenderId: "742089115427",
  appId: "1:742089115427:web:f86d671b7e4402f9fdae96",
  measurementId: "G-Z0H1Y07TL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);