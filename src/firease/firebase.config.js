// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgZsjkYoGyvQ_Yc2ReUSwhFiZsFUScKEQ",
  authDomain: "panting-arena.firebaseapp.com",
  projectId: "panting-arena",
  storageBucket: "panting-arena.appspot.com",
  messagingSenderId: "84373290294",
  appId: "1:84373290294:web:8185bcb50d0d0eca0e0797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;