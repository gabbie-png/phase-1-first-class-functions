function receivesAFunction (callback){
    console.log(callback());
}
receivesAFunction(function (){
    return "spy";
})
function returnsANamedFunction (){
    return function thisIsAFunction(){

    }

}
function returnsAnAnonymousFunction(){
    return function (){
        
    }

}