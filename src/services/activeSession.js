import firebase from "./firebase";

const session = (callback) => {
  const result = firebase.auth().onAuthStateChanged(callback);
  return result;
};

export default session;
