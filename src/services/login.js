import firebase from "./firebase";

const login = (email, password) => {
  const result = firebase.auth().signInWithEmailAndPassword(email, password);
  return result;
};

export default login;
