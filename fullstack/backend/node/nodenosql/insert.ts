var MongodbClient=require('mongodb').MongoClient;



var url1="mongodb://127.0.0.1:27017/"
MongodbClient.connect(url1,(err:any,db:any)=>{
    if(err)throw err
    console.log("db connected")
var dbo=db.db("360sunrize1")
var obj={id:2,name:"schang",claass:'mern class'}
dbo.collection('users').insertOne(obj,(err:any,res:any)=>{
    if(err)throw err;
    console.log(res)
    db.close()
})

})