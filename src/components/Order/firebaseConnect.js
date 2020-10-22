import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAM9TRvgWw-bR6f14K5I8B4tuuW1lHjtdQ",
    authDomain: "testlogin-6a9c7.firebaseapp.com",
    databaseURL: "https://testlogin-6a9c7.firebaseio.com",
    projectId: "testlogin-6a9c7",
    storageBucket: "testlogin-6a9c7.appspot.com",
    messagingSenderId: "296894479323"
};

// export const ListProductData = firebase.database().ref('/shop1/dishes');

export const firebaseConnect = firebase.initializeApp(config);
