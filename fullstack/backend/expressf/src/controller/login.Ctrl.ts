import { sendingMail } from "../library/sendMail"
var {User}=require('../models')
const login_Get=(req:any,res:any)=>{  
    console.log(req.query)
    const {name,email,password}=req.query
    console.log(name,email,password)
    sendingMail(name,email)
    

var stu1=new User({name:name,email:email,password:password})
stu1.save()
    res.render('login',{name:name,email:email,password:password})
}
module.exports={login_Get}