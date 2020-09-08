import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRtzcD7Cwpvyg6TYDg8rEc4kNs-B3pWZU",
  authDomain: "react-daily-inventory.firebaseapp.com",
  databaseURL: "https://react-daily-inventory.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
