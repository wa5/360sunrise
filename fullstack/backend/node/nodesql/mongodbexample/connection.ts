// const mysql=require('mysql')
//  const con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:'',
//     database:'360sunrize1'
// })
con.connect((err:any)=>{
    if(err) throw err
    console.log("connected")
    con.query("CREATE DATABASE 360sunrize1",(err:any,res:any)=>{

        if(err)throw err;
        console.log("datbse created")
    })
})