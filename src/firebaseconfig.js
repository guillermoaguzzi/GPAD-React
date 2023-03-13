
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkk8h8NvypBesHreVOY0EUr8zOgPpkpwo",
  authDomain: "gpad-react.firebaseapp.com",
  projectId: "gpad-react",
  storageBucket: "gpad-react.appspot.com",
  messagingSenderId: "453311561434",
  appId: "1:453311561434:web:6fc4d2ff43123ee88befe3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)