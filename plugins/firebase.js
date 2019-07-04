import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyD0fPL-oJdsnKHnmWdGkDDlGeLDpWcKbUU",
        authDomain: "products-7afde.firebaseapp.com",
        databaseURL: "https://products-7afde.firebaseio.com",
        projectId: "products-7afde",
        storageBucket: "products-7afde.appspot.com",
        messagingSenderId: "693538229269",
        appId: "1:693538229269:web:ce665cd2a0f80d07"
    }
    firebase.initializeApp(config)
}

export const fireDb = firebase.firestore()



// firebase.initializeApp(config);

// const db = firebase.firestore();




// import firebase from 'firebase'

// let firebaseConfig = {
//         apiKey: "AIzaSyD0fPL-oJdsnKHnmWdGkDDlGeLDpWcKbUU",
//         authDomain: "products-7afde.firebaseapp.com",
//         databaseURL: "https://products-7afde.firebaseio.com",
//         projectId: "products-7afde",
//         storageBucket: "products-7afde.appspot.com",
//         messagingSenderId: "693538229269",
//         appId: "1:693538229269:web:ce665cd2a0f80d07"
// }

// let app = null
// if (!firebase.apps.length) {
//   app = firebase.initializeApp(config)
// }

// export const db = app.database()