// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtSjG2zyVOxyfRqFqk_yhikRNhuXAsPrs",
  authDomain: "eshop-1965c.firebaseapp.com",
  projectId: "eshop-1965c",
  storageBucket: "eshop-1965c.appspot.com",
  messagingSenderId: "57911256995",
  appId: "1:57911256995:web:6ed31dffca60d16d215c16",
  measurementId: "G-7WBDPXGZ4R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

