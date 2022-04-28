const mysql=require('mysql')
 const con1=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:'360sunrize1'
})
module.exports=con1