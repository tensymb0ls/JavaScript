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
console.log('----------------');

const testEmployee3 = new Employee(1001, 'Peter', 'Pen', 14, 3000);
const test4 = new Employee(1002, 'Mahsa', 'Medvedeva', 14, 6000);
intel.addEmployee(testEmployee3);
ubisoft.addEmployee(test4);
console.log(ubisoft);
console.log(intel);
console.log(intel.maxSalary());
console.log(ubisoft.maxSalary());

intel.printCompany();
intel.printStats();

const findAdvisor = {
    company: [],
    addCompany: function (company) {
        this.company.push(company);
    },
    findCompany: function (name) {
        for (let i = 0; i < this.company.length; i++) {
            if (name === this.company[i].name) {
                return this.company[i];
            }
        }
    }
}
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
        let min = this.employees[0].salary;;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].salary < min) {
                min = this.employees[i].salary;
            }

        }
        return min;
    }
    this.maxSalary = function () {
        let max = this.employees[0].salary;;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].salary > max) {
                max = this.employees[i].salary;
            }

        }
        return max;
    }
    this.avgSalary = function () {
        return this.totalSalary() / this.employees.length;
    }
    this.printCompany = function () {
        console.log(this.name);
        console.log('============');
        for (let i = 0; i < this.employees.length; i++) {
            this.employees[i].printEmployee();
        }
    }
    this.printStats = function () {
        console.log(`Stats for ${this.name}`);
        console.log('**********************');
        console.log(`Total Salary: ${this.totalSalary()}`);
        console.log(`Average Salary: ${this.avgSalary()}`);
        console.log(`Minimal Salary: ${this.minSalary()}`);
        console.log(`Maximal Salary: ${this.maxSalary()}`);
    }
}


