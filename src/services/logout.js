import firebase from "./firebase";

const logout = async () => {
  const result = await firebase.auth().signOut();
  return result;
};

export default logout;
