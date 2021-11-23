import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDkfs14ijTEjaP7qvQ_hW8ItneDtrLbJA",
  authDomain: "insta-34f33.firebaseapp.com",
  databaseURL: "https://insta-34f33-default-rtdb.firebaseio.com",
  projectId: "insta-34f33",
  storageBucket: "insta-34f33.appspot.com",
  messagingSenderId: "37558142054",
  appId: "1:37558142054:web:4b103787013da8612f99a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc, setDoc, addDoc, deleteDoc };
