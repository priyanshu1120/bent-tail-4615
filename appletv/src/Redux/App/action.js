import axios from "axios"
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCESS } from "./actionType"
export const GET_MOVIES_LOADING_fn=()=>{
    return {type: GET_MOVIES_LOADING}
}
export const GET_MOVIES_SUCESS_fn=(payload)=>{
    return {type: GET_MOVIES_SUCESS,payload}
}
export const GET_MOVIES_FAILURE_fn=()=>{
    return {type: GET_MOVIES_FAILURE}
}

export const ADD_PRODUCT_REQUESTfn=()=>{
    return {type: ADD_PRODUCT_REQUEST}
}
export const ADD_PRODUCT__SUCESS_fn=(payload)=>{
    return {type: ADD_PRODUCT_SUCCESS,payload}
}
export const ADD_PRODUCT__FAILURE_fn=()=>{
    return {type: ADD_PRODUCT__FAILURE_fn}
}
export const DELETE_PRODUCT_REQUEST_fn=()=>{
    return {type: DELETE_PRODUCT_REQUEST}
}
export const DELETE_PRODUCT__SUCESS_fn=(id)=>{
    return {type: DELETE_PRODUCT_SUCCESS,payload:id}
}
export const DELETE_PRODUCT_FAILURE_fn=()=>{
    return {type: DELETE_PRODUCT_FAILURE}
}

export const GET_PRODUCTS =(params) =>(dispatch)=>{
    dispatch(GET_MOVIES_LOADING_fn())
   return axios.get("http://localhost:8080/movies",params)
    .then((r)=> {dispatch(GET_MOVIES_SUCESS_fn(r.data))})
    .catch((e)=>{GET_MOVIES_FAILURE_fn(e)})
}
export const ADD_DATA=(payload)=>(dispatch)=>{
    dispatch(ADD_PRODUCT_REQUESTfn)
   return axios.post("http://localhost:8080/movies",payload)
    .then((r)=>{ 
      dispatch(ADD_PRODUCT__SUCESS_fn(r.data))
    //   dispatch(GET_PRODUCTS())
    }).catch((e)=>{ADD_PRODUCT__FAILURE_fn(e)})
}
export const DELETE_DATA=(id)=>(dispatch)=>{
    dispatch(DELETE_PRODUCT_REQUEST_fn)
   return axios.delete(`http://localhost:8080/products/${id}`)
    .then((r)=>{ 
        console.log(r.data,"delete")
      dispatch(DELETE_PRODUCT__SUCESS_fn())
      dispatch(GET_PRODUCTS())
    })
      
               
    .catch((e)=>{DELETE_PRODUCT_FAILURE_fn(e)})
}