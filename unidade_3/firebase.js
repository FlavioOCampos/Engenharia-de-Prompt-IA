// FIREBASE SDK

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIG FIREBASE

const firebaseConfig = {

  apiKey: "SUA_API_KEY",

  authDomain: "SEU_AUTH_DOMAIN",

  projectId: "SEU_PROJECT_ID",

  storageBucket: "SEU_STORAGE_BUCKET",

  messagingSenderId: "SEU_SENDER_ID",

  appId: "SEU_APP_ID"

};


// INICIAR FIREBASE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// EXPORTAR

export { db };
