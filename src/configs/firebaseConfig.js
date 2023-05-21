import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:"AIzaSyA2_pZxadYSbvjvf080lt3CRiNPDgFNiLE" ,
  authDomain: "dip1-db6b6.firebaseapp.com",
  projectId: "dip1-db6b6",
  storageBucket: "dip1-db6b6.appspot.com",
  messagingSenderId: "1023582885448",
  appId: "1:1023582885448:web:4912270e9bb64e55be6a7d"
};

export const app = initializeApp(firebaseConfig);