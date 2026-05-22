//Task 1 — Smart Attendance Checker
function checkAttendance(attendance,feesPaid) {
    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam");
    }else {
        console.log("Not Allowed");
    }
}
checkAttendance(60, true);

//Task 2 — Mobile Password Strength Checker
let password = "Abc12345";
let hasUppercase = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
       
}

//Task 3 — Find Second Largest Number
let numbers = [10,50,80,20,90,70];
let largest = numbers[0];
let secondLargest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
} else if (numbers[i] > secondLargest && numbers[i] !== largest) {
    secondLargest = numbers[i];
}
}
console.log(secondLargest);

//Task 4 — Bus Seat Booking System
let seats = [1,2,3,4,5,6,7,8,9,10];
let bookSeat = 3;
for (let i = 0; i < seats.length; i++) {
    if(i === bookSeat - 1){
    if (seats[i] === "booked") {
    console.log("Seat Already Booked");
} else {
    seats[i] = "booked";
    console.log("Seat Booked Successfully");
}
    }
}

//Task 5 — ATM Cash Withdraw Logic
function withdrawCash(amount) {
    let balance = 10000;
    if (amount > balance) {
        return "Insufficient Balance";
    } else if (balance - amount < 1000) {
        return "Insufficient Balance";
    }else {
        return "Withdraw Success";
    }
}
console.log(withdrawCash(9500));

//Task 6 — Product Search Engine
let products = ["iphone", "samsung","realme","oppo"];
let search = "realme";
let found = false;
for (let product of products) {
    if (product .toLowerCase() === search.toLowerCase()) {
        found = true;
    }
}
if (found === true) {
    console.log("Product Found");
} else {
    console.log ("Product Not Found");
}

//Task 7 — Voting Eligibility System
let age = 20;
let hasVoterId = true;
let citizenship = "Indian";
if (age >= 18) {
    if(hasVoterId === true && citizenship === "Indian") {
        console.log("Eligible to vote");
    } else {
        console.log ("Not Eligible to Vote");
    }
} else {
    console.log("Not Eligible to Vote");
}

//Task 8 — Online Food Order Bill
function calculateBill(foodPrice,gst,deliveryCharge,discount) {
    let totalBill = foodPrice + gst + deliveryCharge - discount;
    console.log("Total Bill : ₹" + totalBill);
}
calculateBill(400,50,30,30);

//Task 9 — Reverse Word Without reverse()
let word = "javascript";
let reverseWord = "";
for (let i = word.length - 1; i >=0; i--) {
    reverseWord = reverseWord + word[i];
}
console.log(reverseWord);

//Task 10 — Mini Instagram Like System
let isLiked = false;
let totalLikes = 0;
function likePost() {
    isLiked = !isLiked;
    totalLikes = isLiked ? totalLikes + 1 : totalLikes - 1;
    let message = isLiked ? "Liked ❤️" : "Like  🤍";
    console.log(message);
    console.log("Total Likes:" + totalLikes);
}
likePost();