var firebaseConfig = {
    apiKey: "AIzaSyCX30cBMZd48VmGNfGLuk8_-S5l-IQKPF0",
    authDomain: "playground-f317d.firebaseapp.com",
    databaseURL: "https://playground-f317d.firebaseio.com",
    projectId: "playground-f317d",
    storageBucket: "playground-f317d.appspot.com",
    messagingSenderId: "771712858229",
    appId: "1:771712858229:web:33be34ed7570d21ea0203c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const message = firebase.messaging();