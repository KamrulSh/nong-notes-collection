import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiWMXgXzYfKbbfgAt7JNwWUHtvzGfh5mU",
    authDomain: "nong-notes-collection.firebaseapp.com",
    databaseURL: "https://nong-notes-collection.firebaseio.com",
    projectId: "nong-notes-collection",
    storageBucket: "nong-notes-collection.appspot.com",
    messagingSenderId: "115219669823",
    appId: "1:115219669823:web:9da845c78f8a078e36a98a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
