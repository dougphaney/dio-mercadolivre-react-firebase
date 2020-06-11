import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2dwzkn1OOVuXnApVb121_w8a0hKzGsmY",
    authDomain: "clone-mercadolivre.firebaseapp.com",
    databaseURL: "https://clone-mercadolivre.firebaseio.com",
    projectId: "clone-mercadolivre",
    storageBucket: "clone-mercadolivre.appspot.com",
    messagingSenderId: "34192333974",
    appId: "1:34192333974:web:107220d848ad021f48b6b7",
    measurementId: "G-6N5QGMX813"
};

firebase.initializeApp(firebaseConfig);

export default firebase