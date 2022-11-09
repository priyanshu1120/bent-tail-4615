import { GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCESS } from "./actionType";

const initialState={
    isloading:false,
    movies:[],
    isError:false
}
export const reducer =(oldstate=initialState,action)=>{
    switch(action.type){
        case GET_MOVIES_LOADING:{
            return({
                ...oldstate,isloading:true
            })
        }
        case GET_MOVIES_SUCESS:{
            return({
                ...oldstate,isloading:false,books:action.payload
            })
        }
        case GET_MOVIES_FAILURE:{
            return({
                ...oldstate,isError:false
            })
        }
        default: return oldstate ;
    }
}