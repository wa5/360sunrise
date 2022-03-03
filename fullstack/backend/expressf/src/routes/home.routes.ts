import { Router } from "../common/expressApp"



Router.route('/home')
.get((req:any,res:any)=>{
    var g=5666
    res.render('home',{key:g})
})

module.exports=Router;