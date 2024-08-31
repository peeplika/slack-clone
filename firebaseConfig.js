import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnsOR0u7tp2NpOLVbHS_EWQbsO9cAjUAw",
  authDomain: "slack-clone-5f91f.firebaseapp.com",
  databaseURL: "https://slack-clone-5f91f-default-rtdb.firebaseio.com",
  projectId: "slack-clone-5f91f",
  storageBucket: "slack-clone-5f91f.appspot.com",
  messagingSenderId: "199114382565",
  appId: "1:199114382565:web:1dbfc2b097c3a4c95e880c",
  measurementId: "G-3919CZ3BQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);