var employees= ['A', 'B', 'C'];

let [emp1, emp2, emp3] = employees;

let [emp4, ...emp5] = employees;
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log('...mang ne spread');
console.log(emp4);
console.log(emp5);