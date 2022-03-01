var MongodbClient = require("mongodb").MongoClient;

var url1 = "mongodb://127.0.0.1:27017/";
MongodbClient.connect(url1, (err: any, db: any) => {
  if (err) throw err;
  console.log("db connected");
  var dbo = db.db("360sunrize1");
var myq={id:2}
var obj2={$set:{name:"mern stack class"}}
dbo.collection('users').updateOne(myq,obj2,(err:any,res:any)=>{
if(err)throw err
console.log("value updated")
db.close()
})
 
});
