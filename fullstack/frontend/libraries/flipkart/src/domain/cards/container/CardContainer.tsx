import { useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { fetchTodoRequest } from "../../../store/todo/action";
import MyMediaCard from "../components/MyMediaCard";

interface IStateProps{
    name:string
}
const mapStateToprops=(state: any)=>{
    console.log("ghh",state?.todo?.todos[0]?.title)
    return {
        name:state?.todo?.todos[0]?.title
    }
}

const MyMediaCardViews:React.FC<IStateProps>=props=>{
    const dispach =useDispatch()
    useEffect(()=>{
        dispach(fetchTodoRequest())

        },[])
    return (
<MyMediaCard name={props.name}/>
    )
}
   

export const  CardContainer:React.ComponentType=connect<IStateProps>(mapStateToprops)(MyMediaCardViews)



