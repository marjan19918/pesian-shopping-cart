import "firebase/auth";
import firebase from'firebase/app';
 import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiTBfCdbzfWRRLd8BZKJyL9l4Gn_NRr4s",
    authDomain: "myshop-a1a87.firebaseapp.com",
    databaseURL: "https://myshop-a1a87.firebaseio.com",
    projectId: "myshop-a1a87",
    storageBucket: "myshop-a1a87.appspot.com",
    messagingSenderId: "654362279325",
    appId: "1:654362279325:web:91cdd1370c55c01f588374"
  };
  firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore();
  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapshot= await userRef.get();
    if(! snapshot.exists){
        const { displayName,email}=userAuth;
        const createAt=new Date();
        try{
            await userRef.set({
                displayName,
               
                email,
                createAt,
                ...additionalData
            })
        }catch(error){console.log('error creating data',error.message)}
        

    }
    return userRef;
    
}

// export const creatUser=firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// export const signInUser= firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
// });
// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
