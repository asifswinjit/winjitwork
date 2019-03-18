import ErrorMessages from '../constants/errors';
import firebase from 'firebase'
import statusMessage from './status_action';
//To Validate and authenticate user for login

//Clear User Props
export function  clearUserProps(){
  return dispatch => new Promise(resolve => resolve(dispatch({
    type:'VALIDATE_USER' ,
    payload:undefined, 
  })));
  
}
//Clear User Props
export function  clearUserSignUpProps(){
  return dispatch => new Promise( async resolve => {
    await statusMessage(dispatch, 'loading', false); 
    resolve(dispatch({
      type:'USER_SIGNUP' ,
      payload:undefined, 
    }))
  });
  
}
//Check user Login
export function validateUser(userEmail,userPassword)
{
  console.log(userEmail+" , "+userPassword);
 
  return dispatch => new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);
    return firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(async (response)=> {
      console.log(" In Success Block")
      await statusMessage(dispatch, 'loading', false);
      return dispatch({
        type:'VALIDATE_USER' ,
        payload:{'data':response,'success':true,'message':"User Login Succesfully"}, 
      })
    }).catch(async function(error) {
      // Handle Errors here.
      console.log(" In Catch Block")
      var errorCode = error.code;
      var errorMessage = error.message;
      await statusMessage(dispatch, 'loading', false);
      return dispatch({
        type:'VALIDATE_USER' ,
        payload:{
                'data':{'errorCode':errorCode,'success':true,'message':errorMessage},
                'success':false
                }, 
      })
      // ...
    });

  });//end of Promise
}

export function userSignUp(user) {
  return dispatch => new Promise(async (resolve, reject) => {
    // Validation checks
    if (!user.firstname) return reject({ message: ErrorMessages.missingFirstName });
    if (!user.lastname) return reject({ message: ErrorMessages.missingLastName });
    if (!user.email) return reject({ message: ErrorMessages.missingEmail });
    if (!user.password) return reject({ message: ErrorMessages.missingPassword });
    if (!user.confirmpassword) return reject({ message: ErrorMessages.missingPassword });
    if (user.password !== user.confirmpassword) return reject({ message: ErrorMessages.passwordsDontMatch });

    await statusMessage(dispatch, 'loading', true);

    // Go to Firebase
    return firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        // Send user details to Firebase database
        if (data && data.user.uid) {
          firebase.database().ref('users/'+data.user.uid).set(
            {
              uid:data.user.uid,
              firstName:user.firstname,
              lastName:user.lastname,
              email:user.email,
              phNumber:user.contact,
              country:user.country,
              //licensePermitNumber:'',
              signedUp: firebase.database.ServerValue.TIMESTAMP,
              lastLoggedIn: firebase.database.ServerValue.TIMESTAMP,
              
                     //isverified:false
             }
             ).then(async() => {
               console.log("Record inserted")
              
               //Get Current user and send verification mail to him               
                var currentUser = firebase.auth().currentUser;
                console.log("currentUser ",currentUser);
                currentUser.sendEmailVerification().then(async function() {
                  // Email sent.
                  console.log("Verification mail sent to user")
                  await statusMessage(dispatch, 'loading', false).then(resolve);
                  return dispatch({
                    type: 'USER_SIGNUP',
                    payload:{
                      'data':currentUser,
                      'success':true,
                      'message':'User Register Successfully. Verify your mail to login'
                      }, 
                  })
                  
                }).catch(async function(error) {
                  // An error happened.
                  console.log("Verification Mail sent ERROR!")
                  await statusMessage(dispatch, 'loading', false);
                  return dispatch({
                    type: 'USER_SIGNUP',
                    payload:{
                      'data':{},
                      'success':false,
                      'message':'Something goes wrong'
                      }, 
                  })
                });
              
                //Send Email Verification code ends
               
                })
                .catch(async (error)=>{
                  console.log(" Eror ala ",error)
                  await statusMessage(dispatch, 'loading', false);
                  return dispatch({
                    type: 'USER_SIGNUP',
                    payload:{
                      'data':{},
                      'success':false,
                      'message':'Not Register User, Something goes wrong'
                      }, 
                  })
                });

            //FirebaseRef.child(`users/${res.user.uid}`).set({
           
          
        }
      }).catch(async (err)=>{ console.log(" ERRRRRRR ",err)
                await statusMessage(dispatch, 'loading', false);
                return dispatch({
                  type: 'USER_SIGNUP',
                  payload:{
                    'data':err,
                    'success':false,
                    'message':'SignUp Error'
                    }, 
                })
          });
  }).catch(async (err) => {
    await statusMessage(dispatch, 'loading', false);
    console.log(" ERRRRRRROOORR => ",err)
    dispatch({
      type: 'VALIDATION_ERROR',
      payload:{
        'message':err.message
        }, 
    })
    //throw err.message;
  });
  
    
}