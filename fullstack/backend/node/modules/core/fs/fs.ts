const fs=require('fs')

//creay an file then 
//fs.mkdirSync('sarifa')

//creatuing a file inside folder
//fs.writeFileSync('sarifa/bread.txt',"im favrite dish is chapatee .....and")

//eding file
//fs.appendFileSync('sarifa/bread.txt',"------she also likes curry")

//radng daya from file
//var data=fs.readFileSync('sarifa/bread.txt','utf-8')
//console.log(data)
//fs.unlinkSync('sarifa/h.txt')
fs.rmdirSync('l')

//adding file

let datrr=`--FILE APPENDS DATE---${new Date()  } --FILE APPENDS IP---${ip.address()}`
fs.appendFileSync("syarifah/bread.txt", datrr)
fs.appendFileSync("syarifah/bread2.txt", "--FILE APPENDS IP---" + )
