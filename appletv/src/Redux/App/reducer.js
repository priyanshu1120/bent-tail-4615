import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCESS } from "./actionType";
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
                ...oldstate,isloading:false,movies:action.payload
            })
        }
        case GET_MOVIES_FAILURE:{
            return({
                ...oldstate,isError:false
            })
        }
        case ADD_PRODUCT_SUCCESS: {
            return { ...oldstate, isLoading: true, isError: false, movies: action.payload };
          }
      
          case ADD_PRODUCT_FAILURE: {
            return { ...oldstate, isLoading: false, isError: true };
          }
      
          case DELETE_PRODUCT_REQUEST: {
            return { isLoading: true, isError: false };
          }
      
          case DELETE_PRODUCT_SUCCESS: {
            return { ...oldstate, isLoading: false, movies: action.payload, isError: false };
          }
      
          case DELETE_PRODUCT_FAILURE: {
            return { isLoading: false, isError: true };
          }
        default: return oldstate ;
    }
}