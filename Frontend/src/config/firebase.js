import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzeo3hS8jjONTUQp8ZYLt0kzIEARac4Sw",
  authDomain: "caregroom-auth.firebaseapp.com",
  projectId: "caregroom-auth",
  storageBucket: "caregroom-auth.firebasestorage.app",
  messagingSenderId: "756800354807",
  appId: "1:756800354807:web:e6ef96478564176b01d6f2",
  measurementId: "G-GCMHED6P0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };
