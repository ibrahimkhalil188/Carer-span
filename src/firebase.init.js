import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB3Hkpuca9UjXlRKn91mtypUPxbOrIwas8",
    authDomain: "career-span.firebaseapp.com",
    projectId: "career-span",
    storageBucket: "career-span.appspot.com",
    messagingSenderId: "1020793234365",
    appId: "1:1020793234365:web:d098e8e10dcb009adce8d4"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;