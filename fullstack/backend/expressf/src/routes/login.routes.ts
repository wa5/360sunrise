import {  Router } from "../common/expressApp"



Router.route('/login')
.get((req:any,res:any)=>{  
    console.log(req.query)
    const {name,email,password}=req.query
    console.log(name,email,password)
    res.render('login',{name:name,email:email,password:password})
})
module.exports=Router;