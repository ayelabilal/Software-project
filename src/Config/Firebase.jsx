// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA7npVhtV7kuqdxoLs8eGf8L9ulAonUHk",
  authDomain: "software-project-78851.firebaseapp.com",
  projectId: "software-project-78851",
  storageBucket: "software-project-78851.appspot.com",
  messagingSenderId: "743860050443",
  appId: "1:743860050443:web:5668962b5a68704475c50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db,storage };