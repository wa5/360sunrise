import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./actionTypes"
import { TodoActions, TodoState } from "./types"



const initailState:TodoState={
    pending:false,
    todos:[],
    error:null
}




export default (state=initailState,action: TodoActions)=>{
    switch(action.type){
case FETCH_TODO_REQUEST:
    return {
        ...state,
        pending:true
    }
    case FETCH_TODO_SUCCESS:
    return {
        ...state,
        todos:action.payload.todos,
        error:null
    }
    case FETCH_TODO_FAILURE:
    return {
        ...state,
        todos:[],
        error:action.payload.error,
    }
    default:
        return {
            ...state
        }
    }
}