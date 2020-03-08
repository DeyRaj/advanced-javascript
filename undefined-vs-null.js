let name;

function add (num1 , num2){
    console.log(num1 + num2);
    return                             //returned nothing
}

function add (num1 , num2){
    console.log(num1 , num2)           // if we don't pass any parameter which is required 
}

const identity = {name:"Rajan", phone:13445};
console.log(identity.home);            // wrong property 

let fun = undefined;                   // reserved word + defined it as a undefined 
console.log(fun);


let ages =[12, 13, 14];
console.log(ages[11]);                  // searching for 11th indexed value 