import axios from "axios"
import { GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCESS } from "./actionType"
export const GET_MOVIES_LOADING_fn=()=>{
    return {type: GET_MOVIES_LOADING}
}
export const GET_MOVIES_SUCESS_fn=(payload)=>{
    return {type: GET_MOVIES_SUCESS,payload}
}
export const GET_MOVIES_FAILURE_fn=()=>{
    return {type: GET_MOVIES_FAILURE}
}

export const GET_MOVIES =(params) =>(dispatch)=>{
    dispatch(GET_MOVIES_LOADING_fn())
   return axios.get("http://localhost:8080/movies",params)
    .then((r)=> {dispatch(GET_MOVIES_SUCESS_fn(r.data))})
    .catch((e)=>{GET_MOVIES_FAILURE_fn(e)})
}