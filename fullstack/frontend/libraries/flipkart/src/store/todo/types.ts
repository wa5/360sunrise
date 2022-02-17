import { type } from "os";
import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./actionTypes";
export interface ITodo{
    userId:number,
    id:number;
    title:string;
    completed:boolean
}

export interface TodoState{
    pending:boolean,
    todos:ITodo[]
    error:string|null
}
export interface FetchTodoSuccessPayload{
    todos:ITodo[]
}
export interface FetchTodoFailurePayload{
   error:string
}

export type FetchTodoRequest={
    type:typeof FETCH_TODO_REQUEST
}
export type FetchTodoSuccess={
    type:typeof FETCH_TODO_SUCCESS,
    payload:FetchTodoSuccessPayload
    
}
export type FetchTodoFailure={
    type:typeof FETCH_TODO_FAILURE,
    payload:FetchTodoFailurePayload
}

export type TodoActions=FetchTodoRequest|FetchTodoFailure|FetchTodoSuccess