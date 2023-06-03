console.log('-------- script2 ----------------');
const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(john.firstName);
console.log(john['firstName']);

const name = 'firstName';
console.log(john.name);
console.log(john[name]);

console.log(john.fullName());
console.log(`Name => ${john.firstName}`);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 32
}

function printObject(obj) {
    for (let field in obj) {
        if (typeof (obj[field]) !== 'function') {
            console.log(obj[field]);
        }
    }
    console.log('------------------');
}
john.id = 1234;
printObject(john);
console.log('------------------');

function getValueByField(obj, field) {
    return obj[field];
}
console.log(getValueByField(john, 'firstName'));
console.log(getValueByField(peter, 'age'));

const ann = new Person('Ann', 'Hooooo', 19);
const vlad = new Person('Vlad', 'Tsepesh', 99);

printObject(ann);
printObject(vlad);

function Person(firstName, lastName, age) { // конструктор
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log('-------- script2 END ------------');
