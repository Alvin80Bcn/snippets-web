// This snippet file was generated by processing the source file:
// ./auth-next/google-signin.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_google_signin_credential_modular]
signInWithCredential(auth, credential).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  // ...
});
// [END auth_google_signin_credential_modular]