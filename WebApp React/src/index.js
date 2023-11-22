import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAux78sUVoNRz7WCmEMZTdhTtAQUzKP19M",
  authDomain: "seebeyond-b370a.firebaseapp.com",
  projectId: "seebeyond-b370a",
  storageBucket: "seebeyond-b370a.appspot.com",
  messagingSenderId: "658711291124",
  appId: "1:658711291124:web:38ffd4c3eae0ff69bfeaa1",
  measurementId: "G-Y5CQFT8118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//pagina di default che punta alla pagina "App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
