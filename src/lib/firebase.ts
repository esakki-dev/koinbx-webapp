// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration

// We can use get from all value in .env.local file also but I give this local because of You can run local you system also
const firebaseConfig = {
    apiKey: "AIzaSyCjMe0k6r7N9P_z1octGmtKxpJ_jt1eHX8",
    authDomain: "koinbx-webapp.firebaseapp.com",
    databaseURL: "https://koinbx-webapp-default-rtdb.firebaseio.com",
    projectId: "koinbx-webapp",
    storageBucket: "koinbx-webapp.firebasestorage.app",
    messagingSenderId: "1037353014666",
    appId: "1:1037353014666:web:1c0812132175c34a18e473",
    measurementId: "G-H2QPCRG086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Export the Database for getting all data from Firebase Realtime Database

