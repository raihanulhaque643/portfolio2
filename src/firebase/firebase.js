
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPRV_i9pWX_l8Z2BIk8jjYXWOuHU8sI_Y",
    authDomain: "portfolio2-832fd.firebaseapp.com",
    projectId: "portfolio2-832fd",
    storageBucket: "portfolio2-832fd.appspot.com",
    messagingSenderId: "115406932378",
    appId: "1:115406932378:web:e7448cb2789461180dd223"
  };

  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()
export default db;