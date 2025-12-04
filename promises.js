function greet(wishes){
    return new promise((resolve,reject)=>{
        resolve({name:'satya'});
    })
}
function greet2(name){
    return new promise((resolve,reject)=>{
        resolve({Statement:'Have a nice day'});
    })
}
function greet3(statement){
    return new promise((resolve,reject)=>{
        resolve("Get the full statement",statement);
    })
}
greet("Good Morning!")
.then((result)=>{
    return greet2(result.name)
})
.then((result)=>{
    return greet3(result.statement)
})
.then((result)=>console.log(result))
.catch((error)=> console.log(error))