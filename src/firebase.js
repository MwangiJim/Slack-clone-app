import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWxlulf54xhb0bpOFUmY-yGT-USjbI6fo",
  authDomain: "slack-clone-ap-9c4f3.firebaseapp.com",
  projectId: "slack-clone-ap-9c4f3",
  storageBucket: "slack-clone-ap-9c4f3.appspot.com",
  messagingSenderId: "123512887763",
  appId: "1:123512887763:web:2bd2ec6eda2b99e33db726",
  measurementId: "G-BYZH4HYXQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}
