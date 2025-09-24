// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your config here
const firebaseConfig = {
  apiKey: "AIzaSyAPRGZAvYipYVU1yfWGaM8tMfWtXZt9KGA",
  authDomain: "connex-watch.firebaseapp.com",
  projectId: "connex-watch",
  storageBucket: "connex-watch.firebasestorage.app",
  messagingSenderId: "973384307270",
  appId: "1:973384307270:web:52d28299c5124cfe103047",
  measurementId: "G-C3P9YC9E8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
