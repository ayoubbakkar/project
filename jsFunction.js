function identity_function(a){
    return function (){ return a};
 }

 function addf(x) {
    return function (y) {
      return x+y;
    }
}

function applyf(x){
    if(x=="add"){
       return function (a,b){ return a+b};
    }
    else{
       return function (a,b){return a*b;}
    }
}
 
function curry(f ,a ) { 
    return function(b) {
      return f(a, b);
    };
}
function add(a, b) {
  return a + b;
}
function mul(a ,b ){
   return a*b;
}

function applyf(x){
    if(x=="add"){
       return function (a){ return a+1};
    }
    else{
       return function (a,b){return a*b;}
    }
}

function methodize(x){
    if(x=="add"){
       return function (b){ return this.valueOf()+b};
    }
    else{
       return function (b){return this.valueOf()*b;}
    }
}

function demethodize(x){
    if(x=="add"){
       return function (a,b){ return a+b};
    }
    else{
       return function (a,b){return a*b;}
    }
 
}

function twice(x){
    if(x=="add"){
       return function (b){ return 2*b};
    }
    else{
       return function (b){return b*b;}
    }
 }


 function twice(x){
    if(x=="add"){
       return function (b){ return 2*b};
    }
    else{
       return function (b){return b*b;}
    }
 }
 add=twice("add")
 console.log(add(4))
 square=twice("mul")
 console.log(square(4))
 
 function composeu(a,b){
    return (x)=>a(b(x));
 }

 function twice(x){
    if(x=="add"){
       return function (a,b){ return a+b};
    }
    else{
       return function (a,b){return a*b;}
    }
 }
 function composeb(a,b){
    return (x,y,z)=>b(a(x,y),z);
 }
 test=composeb(add,mul)
 console.log(test(2,3,5))
 
  

 
