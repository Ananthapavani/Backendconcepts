
function greeting1(greet1,greeting2){

    console.log(greet1);
    greeting2("Good Morning!");
}
function greeting2(greet2,greeting3){
    console.log(greet2);
    greeting3("This is satya");
}
function greeting3(greet3)
{
    console.log(greet3);
}
greeting1("Hello", function(greet2){
    greeting2(greet2,function(greet3){
        greeting3(greet3)
    })
});