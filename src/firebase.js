import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQENNXb6LbYqMcmKzTucU66_6YKlxe3AY",
    authDomain: "wulax-2de04.firebaseapp.com",
    projectId: "wulax-2de04",
    storageBucket: "wulax-2de04.appspot.com",
    messagingSenderId: "555101136025",
    appId: "1:555101136025:web:d7aa952e1ffd63ef5c0408",
    measurementId: "G-0ZF01VJ28X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
