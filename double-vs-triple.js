const first = 2;
const second = 3;
if (first == second){
    console.log("condition in true");
}
else{
    console.log("condition is false");
}

console.log("----");
const num1 = 2;
const num2 = '2';     //string but output says its true for double equal
if (num1 == num2){
    console.log("condition in true");
}
else{
    console.log("condition is false");
}

console.log("----");
const digit1 = 2;
const digit2 = '2';            //string but output says its false for triple equal
if (digit1 === digit2){     
    console.log("condition in true");
}
else{
    console.log("condition is false");
}

console.log("----");
const x1 = 0;
const x2 = false;     //compare between 0 and false....both of them are similar....output true
if (x1 == x2){
    console.log("condition in true");
}
else{
    console.log("condition is false");
}


console.log("----");
const a1 = 1;
const a2 = true;     //compare between 1 and true....both of them are similar....output true
if (a1 == a2){
    console.log("condition in true");
}
else{
    console.log("condition is false");
}