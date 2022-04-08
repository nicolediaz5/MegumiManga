
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAz_miB0y3dILVA91Z1lbFaqUpCrR-UoI",
  authDomain: "megumimanga.firebaseapp.com",
  projectId: "megumimanga",
  storageBucket: "megumimanga.appspot.com",
  messagingSenderId: "340900009311",
  appId: "1:340900009311:web:6b31f25f0760437f8452ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app 
}