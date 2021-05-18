import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBxkh7hgD_nYBrzS4xjQhdRVxtncQIfHug",
        authDomain: "atishay2-d3800.firebaseapp.com",
        projectId: "atishay2-d3800",
        storageBucket: "atishay2-d3800.appspot.com",
        messagingSenderId: "550491103483",
        appId: "1:550491103483:web:569da0af7524addcad105e",
        measurementId: "G-LTZNS1JP64"

});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };