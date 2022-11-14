import axios from "axios"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, PATCH_BOOK_FAILURE, PATCH_BOOK_LOADING, PATCH_BOOK_SUCESS } from "./actionType"
export const GET_PRODUCT_LOADING_fn=()=>{
    return {type: GET_PRODUCTS_REQUEST}
}
export const GET_PRODUCT_SUCESS_fn=(payload)=>{
    return {type: GET_PRODUCTS_SUCCESS,payload}
}
export const GET_PRODUCT_FAILURE_fn=()=>{
    return {type: GET_PRODUCTS_FAILURE}
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

export const GET_PRODUCTS =(params) =>(dispatch)=>{
    dispatch(GET_PRODUCT_LOADING_fn())
   return axios.get("https://bubbly-blossom-witch.glitch.me/products",params)
    .then((r)=> {dispatch(GET_PRODUCT_SUCESS_fn(r.data))})
    .catch((e)=>{GET_PRODUCT_FAILURE_fn(e)})
}
export const ADD_DATA=(payload)=>(dispatch)=>{
    dispatch(ADD_PRODUCT_REQUESTfn)
   return axios.post("https://bubbly-blossom-witch.glitch.me/products",payload)
    .then((r)=>{ 
      dispatch(ADD_PRODUCT__SUCESS_fn(r.data))
      dispatch(GET_PRODUCTS())
    })
 .catch((e)=>{ADD_PRODUCT__FAILURE_fn(e)})
}
export const DELETE_DATA=(id)=>(dispatch)=>{
    dispatch(DELETE_PRODUCT_REQUEST_fn)
   return axios.delete(`https://bubbly-blossom-witch.glitch.me/products/${id}`)
    .then((r)=>{ 
        console.log(r.data,"delete")
      dispatch(DELETE_PRODUCT__SUCESS_fn())
      dispatch(GET_PRODUCTS())
    }).catch((e)=>{DELETE_PRODUCT_FAILURE_fn(e)})
}

// Patch Request-------------------------------------------->
export const EDIT_DATA =(id,payload) =>(dispatch)=>{
    dispatch({type:PATCH_BOOK_LOADING})
   return axios.patch(`https://bubbly-blossom-witch.glitch.me/products/${id}`,payload)
    .then((r)=> ({type:PATCH_BOOK_SUCESS,payload:r.data}))
    .catch((e)=>({type:PATCH_BOOK_FAILURE,e}))
}
// Preyanshu copy-------------------------------------------->
// const [watchPremiresdata,setWatchPremiresData]=useState([]);
// let D=[];
// useEffect(()=>{
//     fetchBothdata()
// },[])

// const fetchBothdata = async () => {
//   try {
//     const res = await Promise.all([
//       fetch("watchPremires"),
//       fetch("http://localhost:8080/products"),
      
//     ]);
//     const data = await Promise.all(res.map(r => r.json()))
//     data.forEach((i)=>
//     D.push(...i.data)
//     )
//     setWatchPremiresData(D) 
//     console.log(...D)
//   } catch {
//     throw Error("Promise failed");
//   }

// };