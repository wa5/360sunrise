const con3=require('./config/db.config')
interface Istudent{
    id:number,
    name:string,
    class:string
}[]
con3.connect((err:any)=>{
    if(err)throw err;
    console.log("db connected")
    const sql:string="SELECT * FROM `student` "
    con3.query(sql,(err:any,res: Istudent[])=>{
            if(err)throw err
            console.table(res)
            console.log(res[0].name)
        })

})