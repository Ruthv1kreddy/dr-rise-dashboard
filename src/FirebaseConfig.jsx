import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBN3BR1LhcXOqN2t0iwld-duITxXhtcIZM",
  authDomain: "client-portal-267c2.firebaseapp.com",
  databaseURL: "https://client-portal-267c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "client-portal-267c2",
  storageBucket: "client-portal-267c2.appspot.com",
  messagingSenderId: "469823943031",
  appId: "1:469823943031:web:be4cb57df3622cc587f172",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export default auth;
export { db };
