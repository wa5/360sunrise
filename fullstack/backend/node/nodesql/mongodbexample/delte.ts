const con4=require('./config/db.config')
interface Istudent{
    id:number,
    name:string,
    class:string
}[]
con4.connect((err:any)=>{
    if(err)throw err;
    console.log("db connected")
    const sql:string="DELETE FROM `student` WHERE id=1 "
    con4.query(sql,(err:any,res: Istudent[])=>{
            if(err)throw err
            console.table(res)
            console.log(res)
        })

})