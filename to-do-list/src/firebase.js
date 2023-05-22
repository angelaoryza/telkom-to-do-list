import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDtAFbTrBLiTgBs_wYcwAsaKhhY91S8WhA",
    authDomain: "to-do-list-14e37.firebaseapp.com",
    projectId: "to-do-list-14e37",
    storageBucket: "to-do-list-14e37.appspot.com",
    messagingSenderId: "391643676685",
    appId: "1:391643676685:web:e1b991183b8874f6b69544"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}