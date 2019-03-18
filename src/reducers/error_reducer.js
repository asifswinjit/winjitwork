export const initialState = {
    loading: false,
    info: null,
    error: null,
    success: null,
  };
  
  export default function (state = initialState, {type,payload}){
    switch (type) {
      case 'VALIDATION_ERROR': {
        return { payload };
      }
      default:
        return state;
    }
  }
  