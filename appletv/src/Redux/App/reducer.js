import * as types from "./actionType";
const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    basket: [],
    NavbarSearch:[]
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_PRODUCTS_REQUEST:
        case types.GET_PRODUCTS_REQUEST_SEARCHBAR: {
        return { ...state, isLoading: true, isError: false };
      }
      case types.GET_PRODUCTS_SUCCESS: {
        return { ...state, isLoading: false, products: payload, isError: false };
      }
      case types.GET_PRODUCTS_SUCCESS_SEARCHBAR: {
        return { ...state, isLoading: false, NavbarSearch: payload, isError: false };
      }
      case types.GET_PRODUCTS_FAILURE:
        case types.GET_PRODUCTS_FAILURE_SEARCHBAR: {
        return { ...state, isLoading: false, isError: true };
      }
      case types.ADD_PRODUCT_REQUEST: 
        case types.ADD_PRODUCT_REQUEST_AGAIN:{
        return { ...state, isLoading: true, isError: false };
      }
  
      case types.ADD_PRODUCT_SUCCESS: 
      case types.ADD_PRODUCT_SUCCESS_AGAIN:{
        return { ...state, isLoading: true, isError: false, products: payload };
      }
  
      case types.ADD_PRODUCT_FAILURE: 
        case types.ADD_PRODUCT_FAILURE_AGAIN:{
        return { ...state, isLoading: false, isError: true };
      }
  
      case types.DELETE_PRODUCT_REQUEST: 
        case types.DELETE_PRODUCT_REQUEST_AGAIN:{
        return { isLoading: true, isError: false };
      }
  
      case types.DELETE_PRODUCT_SUCCESS:  
        case types.DELETE_PRODUCT_SUCCESS_AGAIN:{
        return { ...state, isLoading: false, basket: payload, isError: false };
      }
  
      case types.DELETE_PRODUCT_FAILURE: 
      case types.DELETE_PRODUCT_FAILURE_AGAIN:{
        return { isLoading: false, isError: true };
      }
  
      default:
        return state;
    }
  };