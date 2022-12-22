import { UserAuth } from "../../Utils/firebase"
import {  GET_AUTH_LOGIN_FAILURE, GET_AUTH_LOGIN_LOADING, GET_AUTH_LOGIN_SUCESS, GET_AUTH_LOGOUT_FAILURE, GET_AUTH_LOGOUT_LOADING, GET_AUTH_LOGOUT_SUCESS, GET_AUTH_SIGNUP_FAILURE, GET_AUTH_SIGNUP_LOADING, GET_AUTH_SIGNUP_SUCESS, GET_AUTH_VERIFY_FAILURE, GET_AUTH_VERIFY_LOADING, GET_AUTH_VERIFY_SUCESS } from "./actionType"
export const GET_AUTH__SIGNUPLOADING_fn=()=>{
    return {type: GET_AUTH_SIGNUP_LOADING}
}
export const GET_AUTH__SIGNUPSUCESS_fn=(user)=>{
    return {type: GET_AUTH_SIGNUP_SUCESS,payload:user}
}
export const GET_AUTH__SIGNUPFAILURE_fn=()=>{
    return {type: GET_AUTH_SIGNUP_FAILURE}
}
//Function For LOGIN up ---------------------------------------------------------------------->
export const GET_AUTH_LOGIN_LOADING_fn=()=>{
    return {type: GET_AUTH_LOGIN_LOADING}
}
export const GET_AUTH_LOGIN_SUCESS_fn=(user)=>{
    return {type: GET_AUTH_LOGIN_SUCESS,payload:user}
}
export const GET_AUTH_LOGIN_FAILURE_fn=()=>{
    return {type: GET_AUTH_LOGIN_FAILURE}
}
//Function For LOGOUT ---------------------------------------------------------------------->
export const GET_AUTH_LOGOUT_LOADING_fn=()=>{
    return {type: GET_AUTH_LOGOUT_LOADING}
}
export const GET_AUTH_LOGOUT_SUCESS_fn=()=>{
    return {type: GET_AUTH_LOGOUT_SUCESS}
}
export const GET_AUTH_LOGOUT_FAILURE_fn=()=>{
    return {type: GET_AUTH_LOGOUT_FAILURE}
}
//Function For USER OR ADMIN VERIFICATION ---------------------------------------------------------------------->
export const GET_AUTH_VERIFY_LOADING_fn=()=>{
    return {type: GET_AUTH_VERIFY_LOADING}
}
export const GET_AUTH_VERIFY_SUCESS_fn=(user)=>{
    return {type: GET_AUTH_VERIFY_SUCESS}
}
export const GET_AUTH_VERIFY_FAILURE_fn=()=>{
    return {type: GET_AUTH_VERIFY_FAILURE}
}
//Function For Sign up ---------------------------------------------------------------------->
export const SIGN_UP_FIREBASE =(email,password,displayName)=>{
    return function (dispatch){
    dispatch ( GET_AUTH__SIGNUPLOADING_fn()) ;
    UserAuth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
    user.updateProfile({
    displayName,
    });
    dispatch (GET_AUTH__SIGNUPSUCESS_fn(user)) ;
    })
    .catch((error) => dispatch (GET_AUTH__SIGNUPFAILURE_fn()) ) ;
    }
}


//Function For LOGIN ---------------------------------------------------------------------->
export const LOGIN_FIREBASE =(email,password)=>{
    return function (dispatch){
    dispatch ( GET_AUTH_LOGIN_LOADING_fn()) ;
    UserAuth
    .s(email,password)
    .then(({ user }) => {
    dispatch (GET_AUTH_LOGIN_SUCESS_fn(user)) ;
    })
    .catch((error) => dispatch (GET_AUTH_LOGIN_FAILURE_fn()) ) ;
    }
}
//Function For GOOGLE Sign up ---------------------------------------------------------------------->
// export const GOOGLE_SIGN_UP_FIREBASE =()=>{
//     return function (dispatch){
//     dispatch ( GET_AUTH__SIGNUPLOADING_fn()) ;
//     UserAuth
//     .signInWithPopup(googleAuthProvider)
//     .then(({ user }) => {
//     dispatch (GET_AUTH_SIGNUP_SUCESS(user)) ;
//     })
//     .catch((error) => dispatch (GET_AUTH__SIGNUPFAILURE_fn()) ) ;
//     }
// }
// //Function For LOGOUT---------------------------------------------------------------------->
// export const LOG_OUT_FIREBASE = () => {
//     return function (dispatch) {
//     dispatch (GET_AUTH_LOGOUT_LOADING_fn());
//     UserAuth
//     .signOut()
//     .then ((resp) => dispatch (GET_AUTH_LOGOUT_SUCESS_fn ()))
//    . catch ((error) => dispatch(GET_AUTH_LOGIN_FAILURE_fn()))
//     }}
// //Function For LOGOUT---------------------------------------------------------------------->
// export const LOG_IN_FIREBASE = () => {
//     return function (dispatch) {
//     dispatch (GET_AUTH_LOGOUT_LOADING_fn());
//     UserAuth.signInWithEmailLink()
//     .then ((resp) => dispatch (GET_AUTH_LOGOUT_SUCESS_fn ()))
//    . catch ((error) => dispatch(GET_AUTH_LOGIN_FAILURE_fn()))
//     }}


