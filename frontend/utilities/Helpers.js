import firebaseapp from 'firebase';

const config = {
  apiKey: "AIzaSyDaA4ZGQODQrfl4SX_B8RP7SEWnhkHpviI",
  authDomain: "testingauth-9f65c.firebaseapp.com",
  databaseURL: "https://testingauth-9f65c.firebaseio.com",
  storageBucket: "testingauth-9f65c.appspot.com",
};
firebase.initializeApp(config)

const createUser = {

SignUp: function(email, pass) {
    const auth = firebaseapp.auth();
    auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
      const user = this.store.createRecord('user', {
        id: userResponse.uid,
        email: userResponse.email
      });
      return user.save();
    });
  },

// SignUp: function(email, pass) {
//
//   auth.createUserWithEmailAndPassword(email, pass).then(function(userResponse) {
//     // Create Record in Store
//   }).catch(function(error) {
//     console.log('test');
//   });
// },

  SignIn: function() {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  },

  SignOut: function() {

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
  }
}

export default createUser;
