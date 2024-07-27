 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
 import { getAuth , onAuthStateChanged , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 import { getFirestore, doc, setDoc ,collection, addDoc , getDocs  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
 import { getStorage , ref , uploadBytes , getDownloadURL   } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDS8j5kC49N9G_wMyfEgGT0t5-_1104J6Q",
  authDomain: "daraz-clone-cafd9.firebaseapp.com",
  projectId: "daraz-clone-cafd9",
  storageBucket: "daraz-clone-cafd9.appspot.com",
  messagingSenderId: "1008369012180",
  appId: "1:1008369012180:web:7382cd77bc0658c7b81a41",
  measurementId: "G-2JD9T4RFLD"
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);
 const db = getFirestore(app)
 const storage = getStorage(app)


 export{auth ,app, db , storage, onAuthStateChanged, signInWithEmailAndPassword,getDocs, createUserWithEmailAndPassword, doc, setDoc, ref ,uploadBytes , getDownloadURL, getFirestore ,initializeApp , collection, addDoc, signOut   }