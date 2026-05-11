// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQXNXcAwQxnrfp_LXyMZDYHQGFIgBhlY",
  authDomain: "geopresenceai.firebaseapp.com",
  projectId: "geopresenceai",
  storageBucket: "geopresenceai.firebasestorage.app",
  messagingSenderId: "50359090351",
  appId: "1:50359090351:web:baee622c4487d20147685a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Banco de dados
const db = getFirestore(app);

// Exportar banco
export { db, collection, addDoc, getDocs };
