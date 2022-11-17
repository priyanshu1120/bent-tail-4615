
import { GET_AUTH_VERIFY_SUCESS_fn } from "./action"
import { GET_AUTH_LOGIN_FAILURE, GET_AUTH_LOGIN_LOADING, GET_AUTH_LOGIN_SUCESS, GET_AUTH_LOGOUT_FAILURE, GET_AUTH_LOGOUT_LOADING, GET_AUTH_LOGOUT_SUCESS, GET_AUTH_SIGNUP_FAILURE, GET_AUTH_SIGNUP_LOADING, GET_AUTH_SIGNUP_SUCESS, GET_AUTH_VERIFY_FAILURE, GET_AUTH_VERIFY_LOADING, GET_AUTH_VERIFY_SUCESS } from "./actionType"

const initialState={
    userAuth: true,
    isAuthloading:false,
    curentUser:null,
    isAuthError:false
}
export const reducer =(oldstate=initialState,action)=>{
    switch(action.type){
        case GET_AUTH_SIGNUP_LOADING:
        case GET_AUTH_LOGIN_LOADING:
        case GET_AUTH_LOGOUT_LOADING:{
            return({
                ...oldstate,isAuthloading:true,isAuthError:false
            })
        }
        case GET_AUTH_SIGNUP_SUCESS:
        case GET_AUTH_LOGIN_SUCESS:{
            return({
                ...oldstate,isAuthloading:false,isAuth:true,curentUser:action.payload
            })
        }
        case GET_AUTH_LOGOUT_SUCESS:{
            return({
                ...oldstate,isAuthloading:false,curentUser:null,isAuthError:false
            })
        }
        case GET_AUTH_SIGNUP_FAILURE:
        case GET_AUTH_LOGIN_FAILURE:
        case GET_AUTH_LOGOUT_FAILURE:{
            return({
                ...oldstate,isAuthError:false,isAuth:false
            })
        }
        case GET_AUTH_VERIFY_LOADING:{
            return({
                ...oldstate
            })
        }
        case GET_AUTH_VERIFY_SUCESS:{
            return({
                ...oldstate, userAuth: false
            })
        }
        case GET_AUTH_VERIFY_FAILURE:{
            return({
                ...oldstate,userAuth:true
            })
        }
        default: return oldstate ;
    }
}