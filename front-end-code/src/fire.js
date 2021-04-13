import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAgercY8FoSicwczCHUAhFPMDxPKDmOANc",
    authDomain: "document-analyzer-login.firebaseapp.com",
    projectId: "document-analyzer-login",
    storageBucket: "document-analyzer-login.appspot.com",
    messagingSenderId: "229601554897",
    appId: "1:229601554897:web:609f0f53c712965d5c70f0"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;