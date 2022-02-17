interface IH1props{
    name:string
}

const UserH1Containr:React.FC<IH1props>=(props)=>{
return (<>
<h1>{props.name}</h1>
</>)
}
export default UserH1Containr