import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3LD1Ou0DfJj1zEVbLK7GDInkMFwxTiaQ",
  authDomain: "note-sphere-9bbc9.firebaseapp.com",
  projectId: "note-sphere-9bbc9",
  storageBucket: "note-sphere-9bbc9.appspot.com",
  messagingSenderId: "206183638840",
  appId: "1:206183638840:web:ce61e911a026dbf6ea83cd"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };