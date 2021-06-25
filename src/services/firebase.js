import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6Wp5XNlgbhyNi4JwCfVfOciyT-KAkqoU",
  authDomain: "blue-media-app.firebaseapp.com",
  projectId: "blue-media-app",
  storageBucket: "blue-media-app.appspot.com",
  messagingSenderId: "133792919040",
  appId: "1:133792919040:web:3fd0b07e6c7b4454bd72e5",
  measurementId: "G-4MKG6HMP6M",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
