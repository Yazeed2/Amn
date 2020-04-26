import firebase, { firestore } from 'firebase'
import Swal from 'sweetalert2'
var thisUser = 'sddfs'

var firebaseConfig = {
    apiKey: "AIzaSyDh0nTkDzhKrXXkplr_y9iODuFB6oIauRo",
    authDomain: "homat-51ec0.firebaseapp.com",
    databaseURL: "https://homat-51ec0.firebaseio.com",
    projectId: "homat-51ec0",
    storageBucket: "homat-51ec0.appspot.com",
    messagingSenderId: "634485955862",
    appId: "1:634485955862:web:0c27df0c13490fc2a38437",
    measurementId: "G-NKTT9BCJ6W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore()
export const check = (id, set)=> {
    db.collection('clients').doc(id).get()
     .then(data => {
         if(data.exists){ 
             set(true)  
         }else{
             set(false)
         }
     })
  
}   

export const getData = (id, set)=> { 
    db.collection('clients').doc(id).get()
    .then(data => {
        if(data.exists){ 
            set(data.data())  
        }else{
            set(false)
        }
    })
}

export const createUser = (userData, history)=> { 

    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    .then(user => { 
    user = user.user
        
            let data = {
                email: userData.email ,
                iscompaney : userData.iscompaney
            }
            if(userData.iscompaney){ 
                data.companyName = userData.companyName
            }else{ 
                data.fullname = userData.fullname
            }
            console.log(data);
            
            db.collection('users').doc(user.uid).set (data)
            .then(back => {
                Swal.fire(
                    'Done!',
                    'You are now rigestered !',
                    'success'
                  )        
                  history.push('/logedin')        
            })
            .catch(err => { 
                console.log(err);
                
            })
                 
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;        
        var errorMessage = error.message;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          })  
    
      });    

}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        thisUser = user
    } else {
        // No user is signed in.
        console.log('There is no logged in user');
    } 
});
export const getUserInfo = (userId, set) => {

   db.collection('users').doc(userId).get()
   .then(snap => {
       if(snap.exists){ 
           snap = snap.data()
           console.log('heelo');
           
           set(snap)
       }
   }
   )
}
export const auth = firebase.auth()

export const loginUser = (userInfo, history) => {
    let {email, password} = userInfo
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(back => { 
        Swal.fire(
            'Done!',
            'logged in successfully!',
            'success'
          )        
          history.push('/logedin')    
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          })  
      });
    
    }


export const createUrl = (email, name, set) =>{
    db.collection('clients').add({
        name,
        email
    })
    .then(snap => {
       set(snap.id)
     
    
    })
}
