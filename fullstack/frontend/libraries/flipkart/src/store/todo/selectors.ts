import {createSelector} from 'reselect'
import { AppState } from '../rootReducer'

const getPending=(state:AppState)=>state.todo.pending
const getTodos=(state:AppState)=>state.todo.todos
const getError=(state:AppState)=>state.todo.error

export const getPendingSeletor=createSelector(getPending,(pending)=>pending)

export const getErrorSeletor=createSelector(getError,(error)=>error)

export const getTodoSeletor=createSelector(getTodos,(todos)=>todos)