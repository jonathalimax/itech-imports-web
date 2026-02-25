import { getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzLNxrl7bBfEmjA8HBNj9OWlufauEiM4s",
  authDomain: "itech-imports-web.firebaseapp.com",
  projectId: "itech-imports-web",
  storageBucket: "itech-imports-web.firebasestorage.app",
  messagingSenderId: "280155897568",
  appId: "1:280155897568:web:bb64bb3a45feba60289a85",
  measurementId: "G-JZMNL3M57L",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const analyticsPromise = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);
