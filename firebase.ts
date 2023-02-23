// import firebase from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyB0orbZVLQVxho9Y7MaZxLCAQv1ew0ww8w",
//     authDomain: "uber-eats-clone-react-na-b0b09.firebaseapp.com",
//     projectId: "uber-eats-clone-react-na-b0b09",
//     storageBucket: "uber-eats-clone-react-na-b0b09.appspot.com",
//     messagingSenderId: "625502626432",
//     appId: "1:625502626432:web:204193cf9daf4be469fc65"
// };

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;

import firebase from '@react-native-firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyB0orbZVLQVxho9Y7MaZxLCAQv1ew0ww8w",
    authDomain: "uber-eats-clone-react-na-b0b09.firebaseapp.com",
    projectId: "uber-eats-clone-react-na-b0b09",
    storageBucket: "uber-eats-clone-react-na-b0b09.appspot.com",
    messagingSenderId: "625502626432",
    appId: "1:625502626432:web:204193cf9daf4be469fc65"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
