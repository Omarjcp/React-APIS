import contactosReducer from "./contactosReducer"
import amigosReducer from "./amigosReducer"
import { combineReducers } from "redux"


const reducer = combineReducers({contactosReducer, amigosReducer})

export default reducer