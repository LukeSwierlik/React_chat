import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBb9vgl-i392V17dZARW4PLg7BWwPNGXi8",
    authDomain: "chat-xsolve.firebaseapp.com",
    databaseURL: "https://chat-xsolve.firebaseio.com",
    projectId: "chat-xsolve",
    storageBucket: "chat-xsolve.appspot.com",
    messagingSenderId: "697615145521"
};

firebase.initializeApp(config);

export default firebase;