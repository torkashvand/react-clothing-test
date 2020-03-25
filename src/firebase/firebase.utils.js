import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYumpVcBHV8HBkj05gUTaQwNdNE8L6CK4",
  authDomain: "crwn-db-33188.firebaseapp.com",
  databaseURL: "https://crwn-db-33188.firebaseio.com",
  projectId: "crwn-db-33188",
  storageBucket: "crwn-db-33188.appspot.com",
  messagingSenderId: "317594386856",
  appId: "1:317594386856:web:3602dc436a19bc6d0f5d9d"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = Date();

    try {
      await userRef.set({ displayName, email, createAt, ...additionalData });
      console.log("user created");
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
