
export function loadingStatus(loadingStatus){
   return dispatch => new Promise(async (resolve, reject) => {
      
        return resolve(dispatch({
            type:"LOADING_WINDOW",
            payload:{'status':loadingStatus}
        }));

      

      }).catch((err) => {
        return resolve(dispatch({
            type:"LOADING_WINDOW",
            payload:{'status':loadingStatus}
        }));
       });

      
  }