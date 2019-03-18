 
const DEFAULT_STATE = {isLoading:false}
export default function (state = DEFAULT_STATE, {type,payload}){
    switch(type)
    {
        case 'USER_VALIDATION':
        return payload
        
        case 'USER_SIGNUP':
        return {userSignUp:payload}

        case 'VALIDATE_USER':
        return {userLogin:payload}
        
        default:
        return state;
    }
}
