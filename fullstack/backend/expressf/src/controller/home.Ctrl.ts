const home_Get=(req:any,res:any)=>{
    var g=5666
    res.render('home',{key:g})
}
module.exports={home_Get}
