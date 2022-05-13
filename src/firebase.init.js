// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe8409Z86RHKeRuQ8sN-Eh2bnjex8SGRk",
    authDomain: "doctors-portal-84bcd.firebaseapp.com",
    projectId: "doctors-portal-84bcd",
    storageBucket: "doctors-portal-84bcd.appspot.com",
    messagingSenderId: "478873156401",
    appId: "1:478873156401:web:18d401dfc9855aa9594e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;