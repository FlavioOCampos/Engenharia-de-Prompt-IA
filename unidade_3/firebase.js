import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT.appspot.com",
  messagingSenderId: "000000000",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    onSnapshot
};
