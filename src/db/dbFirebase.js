import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZFLjHk1qsVVf2f7mSxxLdQ_cW-T9ipIk",
  authDomain: "bookstore-b9c81.firebaseapp.com",
  projectId: "bookstore-b9c81",
  storageBucket: "bookstore-b9c81.firebasestorage.app",
  messagingSenderId: "463473070210",
  appId: "1:463473070210:web:544f16c040bc88445d249b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;