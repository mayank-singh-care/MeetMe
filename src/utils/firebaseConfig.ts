import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB_OLNPsR1KbY9NjSJiqZ5Fz-4fM6FLiIY",
  authDomain: "zoom-clone-5c224.firebaseapp.com",
  projectId: "zoom-clone-5c224",
  storageBucket: "zoom-clone-5c224.appspot.com",
  messagingSenderId: "28962877301",
  appId: "1:28962877301:web:6dafbedb8b726296166d3c",
  measurementId: "G-R3JEDP5YW0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
