//cach khai bao 
/**
 * name
 */
var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " la constructor");
    }
    Person.run = function () {
        console.log('Static: Person is running!');
    };
    Person.prototype.run2 = function () {
        console.log("run 2 la phuong thuc thong thuong");
    };
    return Person;
}());
var p1 = new Person("A Diep");
// console.log(typeof Person);
// console.log(typeof p1);
console.log(Person.run());
console.log(p1.run2());
console.log(p1);
// console.log("So sanh p1.run() va Person.prototype.run");
// console.log(p1.run() === Person.prototype.run());
//# sourceMappingURL=lesstion17.js.map