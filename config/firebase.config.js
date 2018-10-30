import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDQG_r6xt04v05Aomosv1IVb8fM6vRmAqs',
  authDomain: 'fir-react-middleware.firebaseapp.com',
  databaseURL: 'https://fir-react-middleware.firebaseio.com',
  projectId: 'fir-react-middleware',
  storageBucket: 'fir-react-middleware.appspot.com',
  messagingSenderId: '614671763304',
};

firebase.initializeApp(config);

export default firebase;
