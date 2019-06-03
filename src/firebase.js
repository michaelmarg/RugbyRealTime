import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyB1mAUdyqqo7vf6LNshtJq12-2Ga5jwh18",
    authDomain: "rugbyrt-5aa1c.firebaseapp.com",
    databaseURL: "https://rugbyrt-5aa1c.firebaseio.com",
    projectId: "rugbyrt-5aa1c",
    storageBucket: "rugbyrt-5aa1c.appspot.com",
    messagingSenderId: "896366189894"
  };
  firebase.initializeApp(config);
  export default firebase;
