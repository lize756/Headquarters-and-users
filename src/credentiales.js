// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCoUWZUCRpjYNkJpA9KwTdZH6Z58utGQo",
  authDomain: "webavanced-crud.firebaseapp.com",
  projectId: "webavanced-crud",
  storageBucket: "webavanced-crud.appspot.com",
  messagingSenderId: "23117718726",
  appId: "1:23117718726:web:84a3ef8b4b263111f723c7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;