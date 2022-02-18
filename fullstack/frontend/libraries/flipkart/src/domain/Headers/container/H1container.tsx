import { connect } from "react-redux";
import UserH1Containr from "../component/UserH1Containr";

interface IownProps{
}
interface IStateProps{
    name:string
}
const mapStateToProps=(state:any)=>{
    console.log(state)
    return {
        name:'teachoing'
    }
}

export const H1container:React.ComponentType=connect<IStateProps,IownProps>(mapStateToProps)(UserH1Containr)