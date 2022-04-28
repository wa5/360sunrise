var mongoose=require('mongoose')
var url4="mongodb://127.0.0.1:27017/360sunrize1";
mongoose.connect(url4,(err:any)=>{
    if(err)throw err;
    console.log('db connected')
})