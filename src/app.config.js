import { Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
// WC TEST
// var firebaseConfig = {
//     apiKey: "AIzaSyAuDsbSclkr20zEOKNsBHGZsxokReGagIw",
//     authDomain: "wctest-38e61.firebaseapp.com",
//     databaseURL: "https://wctest-38e61.firebaseio.com",
//     projectId: "wctest-38e61",
//     storageBucket: "wctest-38e61.appspot.com",
//     messagingSenderId: "270634325978"
//   };
 
  // WholeChain at Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC2M1OSnmJkp4-shOmsTRlzaGAOpJDbvn0",
    authDomain: "wholechain-b8ec9.firebaseapp.com",
    databaseURL: "https://wholechain-b8ec9.firebaseio.com",
    projectId: "wholechain-b8ec9",
    storageBucket: "wholechain-b8ec9.appspot.com",
    messagingSenderId: "912205664648"
 }

export { DEVICE_WIDTH, DEVICE_HEIGHT, firebaseConfig}