// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuW-V-7PtDiV2vJa1qfDaCt9erynE2N7Y",
  authDomain: "react-d4c2d.firebaseapp.com",
  databaseURL: "https://react-d4c2d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-d4c2d",
  storageBucket: "react-d4c2d.appspot.com",
  messagingSenderId: "34334914172",
  appId: "1:34334914172:web:65a6f63a4e6531a44afbf9",
  measurementId: "G-14CJK2JM38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
