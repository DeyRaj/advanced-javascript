const students = [
    {id:21, name:"Manna"},
    {id:11, name:"Khanna"},
    {id:15, name:"Bappi"},
    {id:13, name:"Jhappi"},
];
const students2 = [];

for(let i = 0; i<students.length; i++){
    const name = students[i];
    result = students[i].name;
    students2.push(result);
}
console.log(students2);

const names = students.map( s=>s.name);
console.log(names);
const ids=students.map( s=>s.id);
console.log(ids);

const bigger = students.filter( s=>s.id>13);
console.log(bigger);

const biggerOne = students.find( s=>s.id>13);
console.log(biggerOne);