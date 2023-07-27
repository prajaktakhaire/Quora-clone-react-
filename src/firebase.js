// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-xRY5eIMmHJI7RzPY0iNQ9zsIFIwIWdM",
  authDomain: "quora-clone-20aa1.firebaseapp.com",
  projectId: "quora-clone-20aa1",
  storageBucket: "quora-clone-20aa1.appspot.com",
  messagingSenderId: "471875524144",
  appId: "1:471875524144:web:f76f8ca08f9e92a521fff5",
  measurementId: "G-GQLJV0PSF8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider, firebaseApp };
export default db;




