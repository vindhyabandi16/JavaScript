//1. E-Commerce Product Filter
fetch("https://fakestoreapi.com/products/")
.then(response => response.json())
.then(products => {

    let filteredProducts = products.filter(product => {
       return product.price > 100 &&
        product.category === "electronics";
});

    filteredProducts.forEach(product => {
        console.log(product.title)
        console.log(product.price)
    });
})



//2. Online Shopping Cart Total
let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
];
let total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
}, 0);
console.log(total);



//3. Employee Salary Dashboard
let employees = [
  { name: "John", salary: 25000 },
  { name: "Sam", salary: 50000 },
  { name: "Ravi", salary: 45000 },
  { name: "Kumar", salary: 30000 }
];
let result = employees
.filter(employee => employee.salary > 40000)
.map(employee => employee.name);
console.log(result);



//4. Food Delivery App
let hotels = [
  { hotel: "A2B", rating: 4.1 },
  { hotel: "KFC", rating: 4.7 },
  { hotel: "Dominos", rating: 4.3 }
];
let hotelResult = hotels.find(hotel => hotel.rating > 4.5);
console.log(hotelResult.hotel);



//5. Student Pass/Fail System
let marks = [45, 67, 89, 90, 34];
let marksResult = marks.every(mark => mark >= 35);
console.log(marksResult);



//6. OTP Verification System
let otpList = [1234, 4567, 7890, 9876];
let enteredOtp = 4567;
let otpResult = otpList.includes(enteredOtp);
console.log(otpResult);



//7. Movie Booking Timer
let count = 10
let timer = setInterval(()=> {
    console.log(count)
    count--
    if(count < 0){
        clearInterval(timer)
        console.log("Booking Closed")
    }
}, 1000)



//8. Instagram Like Counter
let likes = 0;
let likeTimer = setInterval(() => {
    likes++;
    console.log("Likes:", likes);
    if (likes === 10) {
        clearInterval(likeTimer);
    }
}, 1000);



//9. Login Authentication
let username = "admin";
let password = "12345";
if (username === "admin" && password === "12345") {
    console.log("Login Success");
}else {
    console.log("Invalid Credentials");
}



//10. Weather App Simulation
let internet = true;

let weatherPromise = new Promise((resolve, reject) => {
    if (internet === true) {
        resolve("Weather Data");
    } else {
        reject("No Internet");
    }
});

weatherPromise
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});



//11. Amazon Product Search
let products = ["shirt", "bangles", "t-shirt", "shoes", "watches" ];
let productResult = products.filter(product => {
    return product.includes("shirt");
});
console.log(productResult);



//12. YouTube Video Duration
let videos = [10, 20, 30, 40];
let totalWatchTime = videos.reduce((total, duration) => {
    return total + duration;
});
console.log(totalWatchTime);



//13. Swiggy Order Status
let status = "Preparing";
switch(status) {
    case "Placed":
    console.log("Your order has been placed");
    break;
    case "Preparing":
        console.log("Your food is being prepared");
        break;
        case "Out for Delivery":
            console.log("Your order is out for delivery");
            break;
            case "Delivered":
                console.log("Your order has been delivered");
                break;
                default:
                    console.log("Invalid order status");
}



//14. WhatsApp Chat Analyzer
let chats = ["hi", "hello", "How are you", "ok", "bye"]
for(let i = 0; i < chats.length; i++) {
    console.log(chats[i])
}
console.log("Total Messages:", chats.length
)



//15. Netflix Age Restriction
let age = 20;
let ageResult = age >= 18 ? "watch movie" : "access denied";
console.log(ageResult);



//16. Flipkart Product Sorting
let prices = [1200, 450, 9999, 2500, 700];
prices.sort((a,b) => a-b);
console.log(prices);



//17. Employee Attendance
let attendance = ["present", "absent", "present"]
let countAttendance = attendance.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
}, {})
console.log(countAttendance)



//18. Banking System
let balance = 5000;
function deposit(amount) {
    balance = balance + amount;
    console.log("Deposited:", amount);
}
function withdraw(amount) {
    if(amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawn:", amount);
    }else {
        console.log("Insufficient Balance");
    }
}
function checkBalance() {
    console.log("Current Balance:", balance);
}
deposit(2000);
withdraw(1000);
checkBalance();



//19. Zomato Rating Checker
let rating = [4.3, 4.9, 2.5, 3.6]
let lowRating = rating.some(rating => rating < 3)
console.log(lowRating)



//20. Real API Product Table
fetch("https://fakestoreapi.com/products/")
  .then(res => res.json())
  .then(data => {
    let productContainer = document.getElementById("productContainer");

    let cards = data.map(product => {
      return `
        <div class="card">
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>Price: $${product.price}</p>
        </div>
      `;
    });

    productContainer.innerHTML = cards.join("");
  })
  .catch(error => {
    console.log("Error:", error);
  });



  //21. Build Small E-Commerce Logic
  let cartItems = []
fetch("https://fakestoreapi.com/products/")
.then(res => res.json())
.then(data => {

    // Filter category
    let electronics = data.filter(product =>
        product.category === "electronics"
    )
    console.log(electronics)

    // Sort by price
    let sorted = data.sort((a,b)=>
        a.price - b.price
    )
    console.log(sorted)

    // Search product
    let search = data.filter(product =>
        product.title.toLowerCase().includes("shirt")
    )
    console.log(search)

    // Add to cart
    cartItems.push(data[0])
    cartItems.push(data[1])
    console.log(cartItems)

    // Total calculation
    let total = cartItems.reduce((acc,item)=>
        acc + item.price
    ,0)

    console.log("Total :", total)

})