"use strict";
// function soucet(num1: number, num2: number) {
//   return num1 + num2;
// }
// const vysledek = soucet(5, 6);
// console.log(vysledek);
// const myName: string = "David";
// const windows: number = 5;
// const doors: number = 6;
// const color: string = "Blue";
// const height: number = 5;
// const isNew: boolean = true;
// const garage: boolean = false;
// console.log(windows, doors, color, height, isNew, garage);
// let Windows = 4;
// Windows = 6;
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "David",
//   age: 15,
// };
// console.log(person.name, person.age)
let employes;
employes = ["David", "Diana", "Harry"];
employes.map((one) => {
    console.log(one);
});
const person = {
    firstName: "David",
    secondName: "Šetek",
    age: 34,
    hobbies: ["sport", "teaching", "programing"],
};
console.log(person.hobbies);
for (const oneHobby of person.hobbies) {
    console.log(oneHobby);
}
// tuples - pole s fixní délkou
const tuples = ["Davdi", 10];
const array = ["David", "Diana", "Harry"];
const employe = {
    name: "David Šetek",
    age: 34,
    hobbies: ["sport", "teaching", "programing"],
    department: [2, "It developer"],
};
console.log(employe.department);
for (const onePerson of employe.department) {
    console.log(onePerson);
}
// enum role
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
    Role[Role["READ_ONLY"] = 102] = "READ_ONLY";
})(Role || (Role = {}));
const employe1 = {
    name: "David",
    age: 14,
    role: Role.ADMIN,
};
if (employe1.role === 100) {
    console.log("Práva admina");
}
console.log(employe1);
//Union type
// function combination(input1: string | number, input2: string | number) {
//   let result: number | string;
//   if (typeof(input1) === "number" && typeof (input2) === "number") {
//     result = input1 + input2;
//     return result;
//   } else {
//     result = input1.toString() + input2.toString();
//     return result;
//   }
// }
// console.log(combination("Petr", "Pavel"));
// literal type
const height = 186.3;
function combination(input1, input2, resultType) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === resultType) {
        result = +input1 + +input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
}
console.log();
// Return a void, void kdy tam return neni
function sum(n1, n2) {
    console.log(n1 + n2);
    return n1 + n2;
}
sum(5, 10);
function sum2(n1, n2) {
    return n1.toString() + n2.toString();
}
function writeResult(num) {
    console.log("Result: " + num);
    console.log(`Result: ${num}`);
}
writeResult(5);
// object hous, úkol
const house = {
    windows: 4,
    doors: 1,
    color: "Bílá",
    height: 50,
};
const house2 = {
    windows: 10,
    doors: 7,
    color: "Černá",
    height: 60,
};
function houseDescription(myObject) {
    console.log(`Tento sům má ${myObject.windows} okna. Počet dveří je ${myObject.doors}. Barva domu je ${myObject.color}. Výška domu je ${myObject.height} metrů`);
}
houseDescription(house);
houseDescription(house2);
// funkce jako typ typ function nebo specifikujeme podrobně
function calculate(num1, num2) {
    return num1 + num2;
}
function test(description) {
    console.log(description);
}
const Calculate = calculate(5, 9);
console.log(Calculate);
let myNumber = 5;
let myString = "David";
let myFunction;
myFunction = calculate;
// myFunction= test; nemůže fungovat je to přesně sdělené
console.log(myFunction(10, 20));
// callback funkce jako parametr jiné funkce
const y = (nejakeCislo) => {
    console.log(nejakeCislo);
};
y(10);
y(60);
// y("David")
const x = (nejakeCislo) => console.log(nejakeCislo);
function sum1(n1, n2, callBackFun) {
    const result = n1 + n2;
    callBackFun(result);
}
console.log(sum1(5, 30, (x) => console.log(x)));
// Uknown type,  vždy musí projít kontrolou if typeof
let test1;
let result;
test1 = 5;
test1 = "David";
if (typeof test1 === "string") {
    result = test1;
}
// type never, když toam fakt nikdy nebude return
function test2(myValue) {
    return myValue;
}
// function generateError(errorText: string, errorNumber: number): never {
//   throw {
//     message: errorText,
//     error: errorNumber,
//   };
// }
// let result1 = generateError("Závažná chyba", 668);
// console.log(result1);
const myTest = document.querySelector(".test");
console.log(myTest);
// const, let, var
const userName = "David";
let userName2 = "Petr";
var userName3 = "Pavel";
let result1;
function sums(n1, n2) {
    result1 = n1 + n2;
    return result1;
}
console.log(result1);
// if (5 > 3){
// var result2 = true
// }
// console.log(result2)
// arrow function
function sumBig(n1, n2) {
    return n1 + n2;
}
const resultBig = sum(5, 8);
console.log(resultBig);
const mySum = (n1, n2) => n1 + n2;
// defaultní parametr
const mySum1 = (n1 = 5, n2 = 2) => n1 + n2;
// spread operator
const hobbies = ["teaching", "reading", "cinema"];
const activeHobbies = ["running"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
//rest parameters
const testSum = (...myNumber) => {
    return myNumber.reduce((result, value) => {
        return result + value;
    });
};
testSum(5, 3, 5);
testSum(10, 3, 6, 9, 87, 7);
// array destructiong
const employesss = ["David", "Harry", "Hermiona", "Ron"];
const [employe0, employe2, ...otherEmployes] = employesss;
// object destructering
const personB = {
    firstname: "David",
    age: 34,
    hobby: "teaching",
};
const { firstname, age, hobby } = personB;
// OOP typescript
class Department {
    constructor(na, nu) {
        this.name = na;
        this.number = nu;
    }
}
const HDdep = new Department("Human Resources", 200);
const Madep = new Department("Marketing", 200);
const FinDep = new Department("Finance", 300);
console.log(HDdep);
console.log(Madep);
console.log(FinDep);
console.log(HDdep.name);
console.log(Madep.name);
console.log(FinDep.name);
console.log(HDdep.number);
console.log(Madep.number);
console.log(FinDep.number);
// oop a metody
// class Department1 {
//   depName: string;
//   number: number;
//   constructor(depN: string, nu: number) {
//     this.depName = depN;
//     this.number = nu;
//   }
//   describe() {
//     console.log("Oddělení " + this.depName + " má číslo " + this.number);
//   }
// }
// const HRdep = new Department1("Human Resources", 100);
// HRdep.describe();
class House {
    constructor(st, nu, flo, sta) {
        this.street = st;
        this.number = nu;
        this.floors = flo;
        this.state = sta;
    }
    describe() {
        console.log("Jedná se o " +
            this.state +
            " dům. Nachází se v ulici " +
            this.street +
            " " +
            this.number +
            ". Má " +
            this.floors +
            " podlaží.");
    }
}
const house01 = new House("Modrá", 26, 4, "nový");
const house02 = new House("Červená", 5, 2, "nový");
const house03 = new House("Zelená", 32, 1, "starý");
house01.describe();
house02.describe();
house03.describe();
// OOp další hodnoty a private nebo public, readonly a dědění,private, protected, Gettery a settery
// Statické metody
class Department1 {
    // constructor(depN: string, nu: number) {
    //   // this.depName = depN;
    //   // this.number = nu;
    // } Lze zkrátit pod tím výsledek zkrácení, readonly jenom pro čtení, nelze měnit
    constructor(depName, number) {
        this.depName = depName;
        this.number = number;
        // public depName: string;
        // public number: number;
        this.employee = [];
        // this.depName = depN;
        // this.number = nu;
    }
    describe() {
        // this.depName = "Nový název oddělení"; chyba při readonly , nelze měnit
        console.log("Oddělení " +
            this.depName +
            " má číslo " +
            this.number +
            " " +
            Department1.currentYear);
    }
    addEmployee(oneEmployee) {
        this.employee.push(oneEmployee);
    }
    printEmployee() {
        console.log(this.employee);
    }
    vypisEmployee() {
        this.employee.map((oneEmployee) => {
            console.log(oneEmployee);
        });
    }
    static createEmployee(name) {
        return name;
    }
}
Department1.currentYear = 2023;
const department = new Department1("Marketing", 300);
department.describe();
const employee1 = Department1.createEmployee("Ron");
console.log(employee1, Department1.currentYear);
class ItDepartment extends Department1 {
    constructor(string = "IT", number, admins) {
        super(string, number);
        this.admins = admins;
        this.admins = admins;
        this.mainAdmin = admins[0];
    }
    // getter = získání, chceme na základě proměnné něco získat, musí mít return
    get leadAdmin() {
        if (this.mainAdmin) {
            return this.mainAdmin;
        }
        throw new Error("Hlavní admin nenalezen");
    }
    // setter - musíte do něj poslat hodnotu
    set leadAdmin(value) {
        if (this.mainAdmin) {
            this.mainAdmin = value;
        }
        else {
            throw new Error("Hlavní admin nenastaven");
        }
    }
    addEmployee(name) {
        if (name === "David" || name === "Harry") {
            return "Už mají přístup";
        }
        else {
            this.employee.push(name);
        }
    }
}
const IT = new ItDepartment("Front end oddělení", 600, ["David", "Harry"]);
console.log(IT.leadAdmin);
IT.leadAdmin = "Hermiona";
console.log(IT.mainAdmin);
// IT.describe();
// IT.addEmployee("Hermiona");
// console.log(IT);
// const HRdep = new Department1("Human Resources", 100);
// HRdep.describe();
// HRdep.addEmployee("Petr Pavel");
// HRdep.addEmployee("David Šetek");
// HRdep.addEmployee("Martin Zelený");
// // console.log(HRdep.employee);
// HRdep.printEmployee();
// HRdep.vypisEmployee();
// HRdep.addEmployee("Ron Weasley");
// // HRdep.employee[3] = "Ron Weasley";
// HRdep.printEmployee();
// HRdep.vypisEmployee();
// Abstraktní classy a singletonsv a private constructor
class Department2 {
    constructor(na, num) {
        this.name = na;
        this.number = num;
    }
}
// const marketing = new Department2("Marketing", 100);
// marketing.describe();
class ITDepartment extends Department2 {
    constructor(depName, depNum) {
        super(depName, depNum);
    }
    describe() {
        console.log("Text metody describe");
    }
    static getObject() {
        if (this.myObject) {
            return this.myObject;
        }
        else {
            this.myObject = new ITDepartment("IT", 999);
            return this.myObject;
        }
    }
}
// const ITdepCzech = new ITDepartment("CzechIT", 900);
// ITdepCzech.describe();
// používá se jen pokud chceme vytvořit pouze jeden objekt
const IT1 = ITDepartment.getObject();
const IT2 = ITDepartment.getObject();
console.log(IT1);
console.log(IT2);
let sumTest;
sumTest = (number1, number2) => {
    return number1 + number2;
};
const resultTest = sum(5, 20);
console.log(resultTest);
class Person {
    constructor(n, ag = 30) {
        this.name = n;
        // // if (ag) {
        //   this.age = ag;
        // }
        this.age = ag;
    }
    greet(myPhrase) {
        console.log(myPhrase + " " + this.name);
    }
}
let person2 = new Person("Petr");
console.log(person2);
// person2.name = "Harry" readonly, lze vytvořit jenom jednou a nejde přepisovat
person2.greet("Ahoj já jsem");
//# sourceMappingURL=script.js.map