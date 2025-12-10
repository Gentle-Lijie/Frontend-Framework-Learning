let age: number = 25;
let userName: string = "Alice";
let isStudent: boolean = true;

console.log("123");
console.log(`Name: ${userName}, Age: ${age}, Student: ${isStudent}`);

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
let arr: (number | string)[] = [1, "two", 3, "four"];
// let typo_arr: number | string[] = [1, 2, 3, "four"];

// let error_type: number = "This will cause a type error";

// console.log(numbers, names, arr, typo_arr);

type CustomArray = (number | string)[];
let customArr: CustomArray = [10, "twenty", 30, "forty"];

function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("World"));

const add = (num1: number, num2: number): number => {
  // const add:(num1:number, num2:number) => number = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 10));

function slice(start: number = 0, end: number = -1): void {
  console.log(`Slicing from ${start} to ${end}`);
  //   slice(start, end);
}
slice(1, 5);
slice();

let persons: { name: string; age?: number; sayHi: () => void } = {
  name: "John",
  age: 30,
  sayHi(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};
persons.sayHi();

persons.age = undefined; // This is valid since age is optional
persons.sayHi();

interface Person {
  name: string;
  age?: number;
  sayHi: () => void;
}

let user: Person[] = [
  {
    name: "Jane",
    age: 28,
    sayHi(): void {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  },
  {
    name: "Doe",
    sayHi(): void {
      console.log(`Hi, I'm ${this.name}.`);
    },
  },
];

user.forEach((emp) => emp.sayHi());

interface Employee extends Person {
  employeeId: number;
}

let emp1: Employee = {
  name: "Emily",
  age: 32,
  employeeId: 101,
  sayHi(): void {
    console.log(
      `Hi, I'm ${this.name}, my employee ID is ${this.employeeId}, and I'm ${this.age} years old.`
    );
  },
};

emp1.sayHi();

let tupleExample: [number, string, boolean] = [1, "Tuple", true];
console.log(tupleExample);

let emit_type;

emit_type = "This is a string";
emit_type = 42;
