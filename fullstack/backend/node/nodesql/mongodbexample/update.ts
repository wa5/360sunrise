const con =require("./config/db.config")

con.connect((err:any)=>{
    if(err)throw err;
    console.log("db connected")
    const sql:string="UPDATE `student` SET `class`='mren class' WHERE id=1"
    con.query(sql,(err:any,res:any)=>{
            if(err)throw err
            console.log(res)
        })

})