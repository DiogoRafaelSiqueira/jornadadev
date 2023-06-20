// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite'
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBIGGUWnvwKKuxoFT1aIfJ1RzDPMmm-YK0",
  authDomain: "tiktok---jornada-2b3cf.firebaseapp.com",
  projectId: "tiktok---jornada-2b3cf",
  storageBucket: "tiktok---jornada-2b3cf.appspot.com",
  messagingSenderId: "91475769469",
  appId: "1:91475769469:web:f80e64091ec47b7f709914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;