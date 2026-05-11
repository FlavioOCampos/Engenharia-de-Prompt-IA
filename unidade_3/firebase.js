// FIREBASE SDK

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIG FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyCQXNXcAwQxrnrfp_LXyMZDYHQGFIgBhlY",
  authDomain: "geopresenceai.firebaseapp.com",
  projectId: "geopresenceai",
  storageBucket: "geopresenceai.firebasestorage.app",
  messagingSenderId: "50359090351",
  appId: "1:50359090351:web:baee622c4487d20147685a"
};


// INICIAR FIREBASE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// EXPORTAR

export { db };
