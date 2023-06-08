// Company
// Employees
// Application
// Инкапсуляция {информация : методы}
// ------------------------ main -------------------------
const intel = new Company('Intel');
console.log(intel);
const testEmployee = new Employee(100, 'John', 'Snow', 23, 12455);
intel.addEmployee(testEmployee);
console.log('----------------');
console.log(intel);
const testEmployee1 = new Employee(101, 'DED', 'SDF', 23, 12455);
intel.addEmployee(testEmployee1);
console.log('----------------');
console.log(intel);

console.log('----------------');
const test3 = intel.totalSalary();
console.log(test3);

const ubisoft = new Company('Ubisoft');
const employee2 = new Employee(100, 'FOO', 'Jing', 34, 5000);
ubisoft.addEmployee(employee2);
console.log('----------------');
console.log(ubisoft);
console.log(ubisoft.totalSalary());

// --------------- function constructors ------------------
function Employee(id, firstName, lastName, age, salary) {
    // fields
    this.id = +id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = +age,
        this.salary = +salary
    // methods
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.printEmployee = function () {
        console.log(`ID: ${this.id}, name: ${this.getFullName()}, age: ${this.age}, salary: ${this.salary}`)
    }

}
function Company(name) {

    //data
    this.name = name,
        this.employees = [],
        // methods
        this.addEmployee = function (employee) {
            if (this.findEmployee(employee.id)) return;
            this.employees.push(employee)
        }
    this.findEmployee = function (id) {
        for (let i = 0; i < this.employees.length; i++) {
            if (id === this.employees[i].id) {
                return this.employees[i];
            }
        }
    }
    this.totalSalary = function () {
        let res = 0;
        for (let i = 0; i < this.employees.length; i++) {
            res += this.employees[i].salary
        }
        return res;
    }
    this.minSalary = function () {

    }
}


