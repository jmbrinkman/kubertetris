var firebaseConfig = {
  apiKey: "AIzaSyCiNEzg2bndiZUvjBukD9aY65yKxmdfjtE",
  authDomain: "mgcp-kubetetris-next.firebaseapp.com",
  databaseURL: "https://mgcp-kubetetris-next.firebaseio.com",
  projectId: "mgcp-kubetetris-next",
  storageBucket: "mgcp-kubetetris-next.appspot.com",
  messagingSenderId: "550594135167",
  appId: "1:550594135167:web:ade9707f1705850817eb4a",
  measurementId: "G-CG6H5JDQ02"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();
firebase.auth();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)