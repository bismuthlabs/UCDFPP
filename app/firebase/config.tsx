// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDno3Y0FepPphjBIz5UjdGHjaHLLZtjxUQ",
  authDomain: "ucdfpp.firebaseapp.com",
  projectId: "ucdfpp",
  storageBucket: "ucdfpp.appspot.com",
  messagingSenderId: "803161320765",
  appId: "1:803161320765:web:69333ea5396ea90efde954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);