//1. Employee Bonus Filter
let employees = [
    { name: "john", salary: 200000},
    { name: "rahul", salary: 500000},
    { name: "siva", salary: 700000}
];
let emp = employees.filter((e) => {
    return e.salary > 300000
});
let bonusEmp = emp.map((e) => {
    console.log("Congrats", e.name);
});


//2. Shopping Cart Total
let cart = [ 1200, 3400, 500, 999]
let total = cart.reduce((acc, c, i, t) => {
    return acc + c
}, 0);
console.log(total);


//3. Login Username Formatter
let user = "naveen"
let first = user.slice(0, 1).toUpperCase();
let remain = user.slice(1).toLowerCase();
let fullName = first + remain;
console.log(fullName);


//4. OTP Checker
let otp = "560890";
if(otp.includes("0")) {
     console.log("Valid OTP");
}else {
    console.log("Invalid OTP");
}


//5. Food Delivery App
let orders = ["burger", "pizza"];
orders.push("shawarma");
console.log(orders);
orders.pop();
console.log(orders);


//6. Attendance Checker
let marks = [40, 50, 70, 80];
let result = marks.every(mark => mark >= 35);
console.log(result);


//7. Find VIP Customer
let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
]
let vipCustomer = customer.find(c => c.purchase > 10000);
console.log(vipCustomer.name);


//8. Reverse Chat Message
let msg = "hello";
let reversedMsg = msg.split("").reverse().join("");
console.log(reversedMsg);


//9. Remove Duplicate Product
let products = ["tv","laptop","mobile","watch"];
let position = products.indexOf("mobile");
console.log(position);


//10. Student Rank Sort
let s_mark = [99,45,12,67,89];
s_mark.sort((a, b) => a - b);
console.log(s_mark);


//11. Movie Search
let movies = ["Jailer", "Leo", "Vikram"]
let exist = movies.some(movie => movie === "Leo");
console.log(exist);


//12. Hide Mobile Number
let num = "6383366774";
let lastFourDigits = num.slice(-4);
console.log(lastFourDigits);


//13. Online Exam Result
let mark = 78;
let grade = mark >= 35 ? "Pass" : "Fail";
console.log(grade);


//14. Cab Booking Price
function cab(baseFare, extraKm) {
    let totalFare = baseFare + extraKm;
    return totalFare;
}
let total1 = cab(100, 50)
console.log(total1);


//15. Instagram Hashtag Generator
let tag = "web developer";
let tag1 = tag.replaceAll(" ", "_");
console.log(tag1);


//16. Netflix Kids Content
let movies_s = [
  { name: "A", age: 13 },
  { name: "B", age: 18 },
  { name: "C", age: 10 }
];
let kids = movies_s.filter(m => m.age < 18);
kids.map(m => {
    console.log(m.name);
});


//17. E-commerce Product Search
let product = "iphone";
let check = product.startsWith("i");
console.log(check);


//18. WhatsApp Group Names
let groups = ["office", "friends", "family"];
groups.forEach((group, index) => {
    console.log(index + 1, group);
});


//19. Salary Highest Finder
let salary = [20000, 50000, 70000, 10000];
let highestSalary = salary.reduce((max, current) => {
    return current > max ? current : max;
});
console.log(highestSalary);


//20. Password Security Checker
let password = "navi@123";
if (password.length >= 8 && password.includes("@")) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}
