function greet(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Satya");
        },2000);
    })
};

const myfun=async() => {
    console.log("Good Morning!")
    const result=await greet("Good Morning!");
    console.log(result);
    
};
myfun();