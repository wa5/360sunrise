
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../../store/rootReducer"
import { fetchTodoRequest } from "../../../store/todo/action"
import { getErrorSeletor, getPendingSeletor, getTodoSeletor } from "../../../store/todo/selectors"


const SagaTest=()=>{
const dispach =useDispatch()
const pending =useSelector(getPendingSeletor)
const error=useSelector(getErrorSeletor)
const  todos=useSelector(getTodoSeletor)

const getPending=(state:AppState)=>state.todo.pending;
useEffect(()=>{
    dispach(fetchTodoRequest())
},[])
console.log("l",todos)

    return (<div style={{padding:'15px'}}>
        { todos.map((todo,index)=>(
                <div   key={todo.id}>{++index},{todo.title}</div>
            )

            )}
      
    
    </div>)

}

export default SagaTest