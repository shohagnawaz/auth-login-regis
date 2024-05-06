// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpz1s4itCv42p9Xp8Knyxd1yskO0nGGY",
  authDomain: "auth-login-regis.firebaseapp.com",
  projectId: "auth-login-regis",
  storageBucket: "auth-login-regis.appspot.com",
  messagingSenderId: "736451904138",
  appId: "1:736451904138:web:795f209044c0fa61e66373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;