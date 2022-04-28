require('./config/db.config')

var {User}=require('./src/models')

// var stu1=new User({name:'chang',age:12,chocalate:"dairymilk"})
// stu1.save()

// User.findOneAndUpdate({age:13},{chocalate:'perk'},
// {overwrite:false,new:true},(err:any)=>{
// if(err)throw err
// console.log('value updated')
// })


// User.findOne({name:'sarifa'},(err:any,res:any)=>{
//     if(err)throw err;
//     console.log(res)
// })

User.findOneAndDelete({age:12},(err:any,res:any)=>{
    if(err)throw err;
    console.log("deleted value")
})