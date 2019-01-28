import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApToLzNN_C6yfvbPi6-gnQs6a5g92XHQ8",
  authDomain: "catch-of-the-day-4e205.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-4e205.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
