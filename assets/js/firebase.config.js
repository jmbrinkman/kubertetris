var firebaseConfig = {
  apiKey: "AIzaSyCfe0CquH6951zj45yIW4p30j4Q7_AmSKU",
  authDomain: "kubertetris.firebaseapp.com",
  databaseURL: "https://kubertetris.firebaseio.com",
  projectId: "kubertetris",
  storageBucket: "kubertetris.appspot.com",
  messagingSenderId: "282892629213",
  appId: "1:282892629213:web:eb876f4a449f81bb975734",
  measurementId: "G-CG6H5JDQ02"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();
firebase.auth();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)