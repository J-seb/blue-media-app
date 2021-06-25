import firebase from "./firebase";

const deleteUserAuth = async () => {
  const user = firebase.auth().currentUser;
  return user.delete();
};

export default deleteUserAuth;
