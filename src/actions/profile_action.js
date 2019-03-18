import firebase from 'firebase'
 import statusMessage from './status_action';
//To Validate and authenticate user for login
export function updateCurrentUser(user){
  
  return dispatch => new Promise(async (resolve, reject) => {
    var currentUser = await firebase.auth().currentUser;
    console.log(" Current User",currentUser)
    console.log(" State User",user)
if(currentUser){
  var postData = {
    uid:currentUser.uid,
    firstName:user.firstname,
    lastName:user.lastname,
    email:user.emailId,
    phNumber:user.contact,
    country:user.country,
    //licensePermitNumber:user.license,
  };

// Get a key for a new Post.
// var newPostKey = firebase.database().ref().child('users').push().key;

// var updates = {};
// updates['/users/' + currentUser.uid + '/' + newPostKey] = postData;
 console.log("POST DATA = ",postData)
firebase.database().ref('users/'+ currentUser.uid ).update(postData).then(()=>{
  return dispatch({
    type:'USER_PROFILE UPDATE' ,
    payload:{
            'data':{},
            'isLoading':false,
            'success':true
            }, 
  })
}).catch((e)=>{

  console.log("Exception to update user profile data")
  return dispatch({
    type:'USER_PROFILE UPDATE' ,
    payload:{
            'data':{},
            'isLoading':false,
            'success':false
            }, 
  })
});

  
}else{
  return dispatch({
    type:'USER_PROFILE UPDATE' ,
    payload:{
            'data':{},
            'isLoading':false,
            'success':false
            }, 
  })
}
  
  }).catch((e)=>{
    console.log(" Promise catch ",e)
  })
}
export function getCurrentUser()
{
  /****************************************************** */
 
  return dispatch => new Promise((resolve, reject) => {
    var UID = firebase.auth().currentUser.uid;
    
      statusMessage(dispatch, 'loading', true);
    if (UID) {
      var currentUser = firebase.database().ref().child(`users/${UID}`);
      currentUser.on('value',async (data) =>{
        console.log(" JSOn DATA ",data.toJSON())
        await statusMessage(dispatch, 'loading', false);
        return dispatch({
          type:'USER_PROFILE' ,
          payload:{
                  'data':data.toJSON(),
                  'isLoading':false,
                  'success':true
                  }, 
        })
      })
      
        
    } else {
        return dispatch({
            type:'USER_PROFILE' ,
            payload:{
                    'data':undefined,
                    'isLoading':false,
                    'success':false
                    }, 
          })
    }

  }).catch((err)=>{
    console.log("Error in catch")
  });//end of Promise
}
