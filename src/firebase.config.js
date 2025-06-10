
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfxmD5vqaSR_5rHnUL6x_5L2LNIjr5GqU",
  authDomain: "query-hub-8a7ff.firebaseapp.com",
  projectId: "query-hub-8a7ff",
  storageBucket: "query-hub-8a7ff.firebasestorage.app",
  messagingSenderId: "118408237537",
  appId: "1:118408237537:web:aa670e6dbd8c7ad6cbc2a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)