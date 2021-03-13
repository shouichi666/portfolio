import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKODkWe6NvdUEMEVFUW_e7cVsABUmmS2M",
  authDomain: "new-portfolio-7fa66.firebaseapp.com",
  databaseURL: "https://new-portfolio-7fa66-default-rtdb.firebaseio.com",
  projectId: "new-portfolio-7fa66",
  storageBucket: "new-portfolio-7fa66.appspot.com",
  messagingSenderId: "290525328480",
  appId: "1:290525328480:web:d875b4393f4c479418ff05",
  measurementId: "G-TNT3FGPF3Y",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.database();
