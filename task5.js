//Task 1 — Spread Operator
let frontEnd = ["HTML", "CSS"];
let backEnd = ["Node", "MongoDB"];
let merge = [...frontEnd, ...backEnd];
console.log(merge);

//Task 2 — Copy Array
let original = [1,2,3];
let copied = [...original];
copied.push(4)
console.log("Original Array:", original);
console.log("Copied Array:", copied);
console.log("If Any changes", original.length !== 3);

//Task 3 — Object Merge
let student1 = {
    name: "Rahul"
}
let student2 = {
    role: "Developer"
}
let mergedStudent = {...student1, ...student2};
console.log(mergedStudent);

//Task 4 — Rest Operator
function total(a, b, ...rest){
    console.log("a:", a);
    console.log("b:", b);
    console.log("Remaining Values:", rest);
    console.log("Total count of remaining values:", rest.length);
}
total(1,2,3,4,5,6,7,8);

//Task 5 — Array Destructuring
let colors = ["red", "green", "blue", "yellow"];
let [color1, color2, color3, color4] = colors;
console.log(color3);

//Task 6 — Nested Array Destructuring
let data = [1,[2,[3,[4]]]];
let [a, [b,[c,[d]]]] = data;
console.log(a, b, c, d);

//Task 7 — Object Destructuring
let mobile = {
    brand: "Samsung",
    price: 20000,
    color: "black"
}
let {brand, price, color} = mobile;
console.log(brand,color);

//Task 8 — push() & pop()
let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
numbers.pop();
console.log(numbers);

//Task 9 — shift() & unshift()
let fruits = ["banana", "orange"];
fruits.unshift("apple");
fruits.shift();
console.log(fruits);

//Task 10 — splice()
let arr = [1, 2, 30, 40, 5, 6];
arr.splice(2, 2, 3, 4);
console.log(arr);

//Task 11 — concat()
let x = [1, 2];
let y = [3, 4];
let result = x.concat(y, 5, 6);
console.log(result);

//Task 12 — slice()
let marks = [10, 20, 30, 40, 50, 60];
let extracted = marks.slice(2,5);
console.log(extracted);

//Task 13 — flat()
let nest = [1, [2, [3, [4, [5]]]]];
let flatArr = nest.flat(Infinity);
console.log(flatArr);

//Task 14 — fill()
let Arr = [1, 2, 3, 4, 5];
Arr.fill("done", 3);
console.log(Arr);

//Task 15 — includes()
let values = [10, 20, 30, 40];
console.log(values.includes(20));
console.log(values.includes(100));

//Task 16 — indexOf()
let arr1 = [1, 2, 3, 4, 3, 2];
console.log("First index of 3:", arr1.indexOf(3));
console.log("First index of 2:", arr1.indexOf(2));

//Task 17 — lastIndexOf()
let arr2 = [1, 2, 3, 4, 3, 2];
console.log("Last index of 3:", arr2.lastIndexOf(3));
console.log("Last index of 2:", arr2.lastIndexOf(2));

//Task 18 — sort()
let nums = [100, 2, 55, 1, 9];
nums.sort();
console.log("Wrong sort:", nums);
//Wrong output: [1, 100, 2, 55, 9]
nums.sort(function(a,b) {
    return a - b;
})
console.log("Correct sort:", nums);

//Task 19 — reverse()
let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);

//Task 20 — Student Management
let students = ["Rahul", "Ajay", "Kumar"];
students.push("Sri");
students.splice(2,1);
students.splice(1, 1, "Vindhya");
students.reverse();
console.log(students);

//Task 21 — Shopping Cart
let cart = ["Shoes", "Watch", "Phone"];
cart.push("Laptop");
cart.splice(1,1);
console.log("Phone exists:", cart.includes("Phone"));
console.log("Total cart items:", cart.length);
console.log(cart);

//Task 22 — Employee Database
let employee = {
    name: "Naveen",
    role: "Web Developer",
    salary: "5LPA"
}
let {name, role, salary} = employee;
console.log(name, role, salary);
let copiedEmployee = {...employee};
copiedEmployee.salary = "8LPA";
console.log("Original:", employee);
console.log("Copied:", copiedEmployee);
console.log("Original changed?", employee.salary !== copiedEmployee.salary);

//Task 23 — Custom Function
function company(name, ...skills) {
    console.log("Employee Name:", name);
    console.log("Skills:", skills);
    console.log("Total Skills Count:", skills.length);
}
company("Naveen", "HTML", "CSS", "JSS", "React");


//Task 24 — Array Analyzer
let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstFive = data1.slice(0, 5);
let reversed = [...data1].reverse();
let checkSeven = data1.includes(7);
let indexTen = data1.indexOf(10);
console.log("First 5 values:", firstFive);
console.log("Reversed array:", reversed);
console.log("7 exists:", checkSeven);
console.log("Index of 10:", indexTen);

//Task 25 — Complete Challenge
let users = [
  { name: "Rahul", role: "Developer" },
  { name: "Ajay", role: "Designer" },
  { name: "Kumar", role: "Tester" }
];
users.push({ name: "Vindhya", role: "Manager" });
users.pop();
let moreUsers = [
    { name: "Teja", role: "HR"},
    { name: "Sai", role: "Testing"},
];
let finalUsers = users.concat(moreUsers);
console.log("User Names:");
for (let user of finalUsers) {
  console.log(user.name);
}
finalUsers.reverse();
console.log("Reversed Final Array:", finalUsers);
