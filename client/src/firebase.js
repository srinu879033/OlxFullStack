import firebase from "firebase/compat/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC--Lem7AeIkwpUXt50Td9pw8JNyZDFdeQ",
  authDomain: "olxclone-a30bd.firebaseapp.com",
  projectId: "olxclone-a30bd",
  storageBucket: "olxclone-a30bd.appspot.com",
  messagingSenderId: "230689619570",
  appId: "1:230689619570:web:99615afa3fa3638a024ceb",
  measurementId: "G-QY6XETNJN0",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
