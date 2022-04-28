// const mysql=require('mysql')
// const con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:'',
//     database:'360sunrize1'
// })

// con.connect((err:any)=>{
//     if(err) throw err
//     console.log("db connected")
//     var sql:string="CREATE TABLE student(id int(11),name VARCHAR(255),class VARCHAR(255))"
// con.query(sql,(err:any,res:any)=>{
//     if(err)throw err
//     console.log("table created")
// })

// })



con.connect((err:any)=>{
    if(err) throw err
    console.log("db connected")
    const sql:string="INSERT INTO `student`(`id`, `name`, `class`) VALUES ('1','sarifa','mern stack')"
    con.query(sql,(err:any,res:any)=>{
            if(err)throw err
            console.log("inserted")
        })

})