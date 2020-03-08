function add (num1, num2, num3){
    console.log([...arguments]);
    return num1 + num2 + num3 + arguments[3];
}
const result = add(2, 3, 5, 7);
console.log(result);