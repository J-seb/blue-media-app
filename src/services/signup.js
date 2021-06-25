import firebase from "./firebase";

const signup = async (email, password) => {
  const result = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return result;
};

export default signup;
