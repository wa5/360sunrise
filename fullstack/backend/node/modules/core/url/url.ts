var url=require('url')

const myurl="http://localhost:3000/about?name=sarifa&class=mern"


var q=url.parse(myurl,true)
console.log(q.host)
console.log(q.path)
console.log(q.query.name)
console.log(q.query.class)