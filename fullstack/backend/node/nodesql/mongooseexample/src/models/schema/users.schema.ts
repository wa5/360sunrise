
require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStrure=new Schema({
    name:String,
    age:Number,
    chocalate:String,    
})

module.exports=mongoose.model('users123',userStrure)
















// class Humans{
//     eyes:number
//     nose:number
//     constructor(a:number,b:number){
//         this.eyes=a
//         this.nose=b
//     }
// }

// var sarafi=new Humans(2,2)