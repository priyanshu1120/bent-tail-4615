import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as AppReducer } from "./App/reducer"
import thunk from "redux-thunk"
const RootReducer = combineReducers({AppReducer})
export const store = legacy_createStore(RootReducer,applyMiddleware(thunk))
