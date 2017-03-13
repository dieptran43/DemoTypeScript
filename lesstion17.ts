//cach khai bao 
/**
 * name
 */
class Person {
    constructor(name){
        this.name = name;
        console.log(this.name + " la constructor");
    }

   static run(){
        console.log('Static: Person is running!');
    }

    run2(){
        console.log("run 2 la phuong thuc thong thuong");
    }
}
let p1 = new Person("A Diep");
// console.log(typeof Person);
// console.log(typeof p1);
console.log(Person.run());
console.log(p1.run2());
console.log(p1);
// console.log("So sanh p1.run() va Person.prototype.run");
// console.log(p1.run() === Person.prototype.run());
