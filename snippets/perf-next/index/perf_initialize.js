// This snippet file was generated by processing the source file:
// ./perf-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START perf_initialize_modular]
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
// [END perf_initialize_modular]