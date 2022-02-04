
function merge<U,V>(obj1:U,obj2:V):U&V{
    
return {...obj1,...obj2}
}

let person=merge({name:'change'},3)

console.log(person)