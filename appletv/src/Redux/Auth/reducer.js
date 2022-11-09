
import { GET_AUTH_FAILURE, GET_AUTH_LOADING, GET_AUTH_SUCESS } from "./actionType"

const initialState={
    isAuth:false,
    isAuthloading:false,
    token:"",
    isAuthError:false
}
export const reducer =(oldstate=initialState,action)=>{
    switch(action.type){
        case GET_AUTH_LOADING:{
            return({
                ...oldstate,isAuthloading:true,isAuthError:false
            })
        }
        case GET_AUTH_SUCESS:{
            return({
                ...oldstate,isAuthloading:false,isAuth:true,token:action.payload
            })
        }
        case GET_AUTH_FAILURE:{
            return({
                ...oldstate,isAuthError:false,isAuth:false
            })
        }
        default: return oldstate ;
    }
}