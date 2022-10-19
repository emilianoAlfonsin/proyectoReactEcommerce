// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTXz480I0gXHa8NUUw_9XWAlULfVztUjI",
    authDomain: "pipuecommerce.firebaseapp.com",
    projectId: "pipuecommerce",
    storageBucket: "pipuecommerce.appspot.com",
    messagingSenderId: "103243801714",
    appId: "1:103243801714:web:0e3718d28d84fae8814eeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const signup = (email, password) => { createUserWithEmailAndPassword(auth, email, password) };