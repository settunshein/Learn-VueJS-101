// import firebase from "firebase/app";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Kp1htpoM5XOirkbxgzet1uXRvkrn5b8",
  authDomain: "vue-blog-system-d4537.firebaseapp.com",
  projectId: "vue-blog-system-d4537",
  storageBucket: "vue-blog-system-d4537.firebasestorage.app",
  messagingSenderId: "289295734859",
  appId: "1:289295734859:web:0bce813c894129aeea55ce",
  measurementId: "G-4107QXG92K",
};

/* Firebase ကို Init လုပ်တာပါ */
// firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore Service
const db = getFirestore(app);

export { db };
