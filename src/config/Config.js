

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const Config = {
  apiKey: "AIzaSyDMyi-OeBTLnVZ-Ao-tEnOxN0BDLYIPSl0",
  authDomain: "papito-821e9.firebaseapp.com",
  projectId: "papito-821e9",
  storageBucket: "papito-821e9.firebasestorage.app",
  messagingSenderId: "526925464736",
  appId: "1:526925464736:web:707310ec58338f0d31b5c5",
  measurementId: "G-W66YH1VB37"
};

// Initialize Firebase
const app = initializeApp(Config);
const analytics = getAnalytics(app);