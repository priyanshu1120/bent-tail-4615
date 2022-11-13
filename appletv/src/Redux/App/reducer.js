import * as types from "./actionType";
const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    basket: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case types.GET_PRODUCTS_REQUEST: {
        return { ...state, isLoading: true, isError: false };
      }
      case types.GET_PRODUCTS_SUCCESS: {
        return { ...state, isLoading: false, products: payload, isError: false };
      }
      case types.GET_PRODUCTS_FAILURE: {
        return { ...state, isLoading: false, isError: true };
      }
      case types.ADD_PRODUCT_REQUEST: {
        return { ...state, isLoading: true, isError: false };
      }
  
      case types.ADD_PRODUCT_SUCCESS: {
        return { ...state, isLoading: true, isError: false, products: payload };
      }
  
      case types.ADD_PRODUCT_FAILURE: {
        return { ...state, isLoading: false, isError: true };
      }
  
      case types.DELETE_PRODUCT_REQUEST: {
        return { isLoading: true, isError: false };
      }
  
      case types.DELETE_PRODUCT_SUCCESS: {
        return { ...state, isLoading: false, basket: payload, isError: false };
      }
  
      case types.DELETE_PRODUCT_FAILURE: {
        return { isLoading: false, isError: true };
      }
  
      default:
        return state;
    }
  };