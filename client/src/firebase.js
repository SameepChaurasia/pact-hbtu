// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pacthbtu-31e03.firebaseapp.com",
  projectId: "pacthbtu-31e03",
  storageBucket: "pacthbtu-31e03.firebasestorage.app",
  messagingSenderId: "671152798430",
  appId: "1:671152798430:web:a7523bc397707b01d2a04f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

