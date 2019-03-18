 
const DEFAULT_STATE = {isLoading:false}
export default function (state = DEFAULT_STATE, {type,payload}){
    switch(type)
    {
        case 'USER_PROFILE':
        return {userprofile:payload}
        
        case 'COMPANY_PROFILE':
        return {companyProfile:payload}

        default:
        return state;
    }
}
