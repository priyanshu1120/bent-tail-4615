import axios from "axios"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_REQUEST_AGAIN, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS_AGAIN, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_FAILURE_AGAIN, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST_AGAIN, DELETE_PRODUCT_SUCCESS,  DELETE_PRODUCT_SUCCESS_AGAIN,  GET_PRODUCTS_FAILURE, GET_PRODUCTS_FAILURE_SEARCHBAR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_REQUEST_SEARCHBAR, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_SUCCESS_SEARCHBAR, PATCH_BOOK_FAILURE, PATCH_BOOK_LOADING, PATCH_BOOK_SUCESS } from "./actionType"

export const GET_PRODUCT_LOADING_fn=()=>{
    return {type: GET_PRODUCTS_REQUEST}
}
export const GET_PRODUCT_SUCESS_fn=(payload)=>{
    return {type: GET_PRODUCTS_SUCCESS,payload}
}
export const GET_PRODUCT_FAILURE_fn=()=>{
    return {type: GET_PRODUCTS_FAILURE}
}
export const GET_PRODUCT_SEARCH_BAR_LOADING_fn=()=>{
    return {type: GET_PRODUCTS_REQUEST_SEARCHBAR}
}
export const GET_PRODUCT_SEARCH_BAR_SUCESS_fn=(payload)=>{
    return {type: GET_PRODUCTS_SUCCESS_SEARCHBAR,payload}
}
export const GET_PRODUCT_SEARCH_BAR_FAILURE_fn=()=>{
    return {type: GET_PRODUCTS_FAILURE_SEARCHBAR}
}
export const ADD_PRODUCT_REQUESTfn=()=>{
    return {type: ADD_PRODUCT_REQUEST}
}
export const ADD_PRODUCT__SUCESS_fn=(payload)=>{
    return {type: ADD_PRODUCT_SUCCESS,payload}
}
export const ADD_PRODUCT__FAILURE_fn=()=>{
    return {type: ADD_PRODUCT_FAILURE}
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
export const ADD_PRODUCT_REQUEST_AGAIN_fn=()=>{
    return {type: ADD_PRODUCT_REQUEST_AGAIN}
}
export const ADD_PRODUCT__SUCESS_AGAIN_fn=(payload)=>{
    return {type: ADD_PRODUCT_SUCCESS_AGAIN,payload}
}
export const ADD_PRODUCT__FAILURE_AGAIN_fn=()=>{
    return {type: ADD_PRODUCT__FAILURE_AGAIN_fn}
}
export const DELETE_PRODUCT_REQUEST_AGAIN_fn=()=>{
    return {type: DELETE_PRODUCT_REQUEST_AGAIN}
}
export const DELETE_PRODUCT__SUCESS_AGAIN_fn=(id)=>{
    return {type: DELETE_PRODUCT_SUCCESS_AGAIN,payload:id}
}
export const DELETE_PRODUCT_FAILURE_AGAIN_fn=()=>{
    return {type: DELETE_PRODUCT_FAILURE_AGAIN}
}


// Get Products at Admin-------------------------------------------------------------------------------->
export const GET_PRODUCTS =(params) =>(dispatch)=>{
    dispatch(GET_PRODUCT_LOADING_fn())
   return axios.get("https://bubbly-blossom-witch.glitch.me/products",params)
    .then((r)=> {dispatch(GET_PRODUCT_SUCESS_fn(r.data))})
    .catch((e)=>{GET_PRODUCT_FAILURE_fn(e)})
}
// Get Products at NAvBAR Search------------------------------------------------------------------------>
export const GET_PRODUCT_SEARCH =(params) =>(dispatch)=>{
    dispatch(GET_PRODUCT_SEARCH_BAR_LOADING_fn())
   return axios.get("https://jewel-sneaky-dingo.glitch.me/watchPremiers",params)
    .then((r)=> {dispatch(GET_PRODUCT_SEARCH_BAR_SUCESS_fn(r.data))})
    .catch((e)=>{(GET_PRODUCT_SEARCH_BAR_FAILURE_fn())})
}
// Add data to Admin------------------------------------------------------------------------------------>
export const ADD_DATA=(payload)=>(dispatch)=>{
    dispatch(ADD_PRODUCT_REQUESTfn())
   return axios.post("https://bubbly-blossom-witch.glitch.me/products",payload)
    .then((r)=>{ 
      dispatch(ADD_PRODUCT__SUCESS_fn(r.data))
      dispatch(GET_PRODUCTS())
    })
 .catch((e)=>{ADD_PRODUCT__FAILURE_fn(e)})
}
// Add data to Watchpremiers----------------------------------------------------------------------------->
export const ADD_DATA_TO_WATCH_PRE=(payload)=>(dispatch)=>{
    dispatch(ADD_PRODUCT_REQUEST_AGAIN_fn())
   return axios.post("https://jewel-sneaky-dingo.glitch.me/watchPremiers",payload)
    .then((r)=>{ 
      dispatch(ADD_PRODUCT__SUCESS_AGAIN_fn(r.data))
      dispatch(GET_PRODUCTS())
    })
 .catch((e)=>{ADD_PRODUCT__FAILURE_AGAIN_fn(e)})
}
// Delete Data from Admin--------------------------------------------------------------------------------->
export const DELETE_DATA=(id)=>(dispatch)=>{
    dispatch(DELETE_PRODUCT_REQUEST_fn())
   return axios.delete(`https://bubbly-blossom-witch.glitch.me/products/${id}`)
    .then((r)=>{ 
      dispatch(DELETE_PRODUCT__SUCESS_fn())
      dispatch(GET_PRODUCTS())
    }).catch((e)=>{DELETE_PRODUCT_FAILURE_fn(e)})
}
// Delete Data from WatchPremires------------------------------------------------------------------------->
export const DELETE_DATA_TO_WATCH_PRE=(id)=>(dispatch)=>{
    dispatch(DELETE_PRODUCT_REQUEST_AGAIN_fn())
   return axios.delete(`https://jewel-sneaky-dingo.glitch.me/watchPremiers/${id}`)
    .then((r)=>{ 
      dispatch(DELETE_PRODUCT__SUCESS_AGAIN_fn())
      dispatch(GET_PRODUCTS())
    }).catch((e)=>{DELETE_PRODUCT_FAILURE_AGAIN_fn(e)})
}
// Edit data from Admin ----------------------------------------------------------------------------------->
export const EDIT_DATA =(id,payload) =>(dispatch)=>{
    dispatch({type:PATCH_BOOK_LOADING})
   return axios.patch(`https://bubbly-blossom-witch.glitch.me/products/${id}`,payload)
    .then((r)=>  ({type:PATCH_BOOK_SUCESS,payload:r.data}))
    .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
    
}
// Edit data from Watchpremires ---------------------------------------------------------------------------->
export const EDIT_DATA_AGAIN =(id,payload) =>(dispatch)=>{
    dispatch({type:PATCH_BOOK_LOADING})
   return axios.patch(`https://jewel-sneaky-dingo.glitch.me/watchPremiers/${id}`,payload)
    .then((r)=>  ({type:PATCH_BOOK_SUCESS,payload:r.data}))
    .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
}


