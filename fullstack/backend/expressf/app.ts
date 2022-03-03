import express from "express";
require('dotenv').config()
const app = express();
app.set('port',process.env.PORT||3001)

const path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))


//poind

const  endPoint=require('./src/routes')
app.use('/api',endPoint.login)
app.use('/api',endPoint.home)
app.use('/api',endPoint.register)







//url
// app.get('/home/:num',(req,res)=>{
//     res.send(`im a home api${req.params.num}`)
//     })

//8 for anytheng in between
// app.get('/ho*me',(req,res)=>{
//     res.send("im a home api")
//     })

//+1 or more charecters like it
// app.get('/h+o+m+e+',(req,res)=>{
//     res.send("im a home api")
//     })

//? 0 or more times u can give ur charecters
// app.get('/h?o?m?e?',(req,res)=>{
// res.send("im a home api")
// })






























// app.route("/")
// .get((req, res) => {
//   res.send("<h1>this is my first api get</h1>");
// }).post( (req, res) => {
//   res.send("this is my first api post");
// }).put( (req, res) => {
//   res.send("this is my first api put");
// }).delete( (req, res) => {
//   res.send("this is my first api delte");
// })

app.listen(app.get('port'), () => {
  console.log(`server is started:${app.get('port')} `);
});
