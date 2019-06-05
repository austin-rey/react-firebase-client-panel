import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Reducers
import notifyReducer from "./components/reducers/notifyReducer";
import settingsReducer from "./components/reducers/settingsReducer";

// firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB2-ApMoHRDNb5z4zmgLWSd1jSoMCvXogo",
  authDomain: "react-clien-panel.firebaseapp.com",
  databaseURL: "https://react-clien-panel.firebaseio.com",
  projectId: "react-clien-panel",
  storageBucket: "react-clien-panel.appspot.com",
  messagingSenderId: "310557796402",
  appId: "1:310557796402:web:771f95877917724e"
};

// react-redux-firebase Config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
const firestore = firebase.firestore();
// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Root Reducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

// Check for settings in local storage
if (localStorage.getItem("settings") == null) {
  // Default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegristration: false
  };

  // Set to localStorage
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}
// Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

//Create Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
