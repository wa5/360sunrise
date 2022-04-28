const http=require('http')


http.createServer((req: { url: string },res: any)=>{
  var g=  {g:7,k:"ddfgh"}

  if(req.url=='/sarifa'){
    res.write("<h1>hello im sarafi</h1>")
    res.end()
  }
    
}).listen(8080,()=>{
    console.log("server stated")
})