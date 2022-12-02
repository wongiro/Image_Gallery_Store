// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKoGcSDmWObf2hgpgRAGqpqWerfqge5i8",
  authDomain: "snap-store-aa69d.firebaseapp.com",
  projectId: "snap-store-aa69d",
  storageBucket: "snap-store-aa69d.appspot.com",
  messagingSenderId: "602840045859",
  appId: "1:602840045859:web:fa44f90aafec97736ad496",
  measurementId: "G-TZPR680V7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const provider = new EmailAuthProvider();
export const auth = getAuth(app);
export default app;