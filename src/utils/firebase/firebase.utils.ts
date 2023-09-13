import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN1vt6RfuOivb2DtYRc5mwdd-nD_OKEHA",
  authDomain: "crwn-clothing-db-733f3.firebaseapp.com",
  projectId: "crwn-clothing-db-733f3",
  storageBucket: "crwn-clothing-db-733f3.appspot.com",
  messagingSenderId: "1004737327360",
  appId: "1:1004737327360:web:768f3d207baf43f529c3e5",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error: any) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
