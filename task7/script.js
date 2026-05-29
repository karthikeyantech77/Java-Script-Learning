
// 1. E-Commerce Product Filter


async function getProducts() {
  let res = await fetch("https://fakestoreapi.com/products/");
  let data = await res.json();

  let result = data.filter((item) => {
    return item.price > 100 && item.category === "electronics";
  });

  result.forEach((item) => {
    console.log(item.title);
    console.log(item.price);
  });
}

getProducts();



// 2. Online Shopping Cart Total


let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
];

let total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);

console.log(total);


// 3. Employee Salary Dashboard


let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
];

let highSalary = employees
  .filter(emp => emp.salary > 40000)
  .map(emp => emp.name);

console.log(highSalary);



// 4. Food Delivery App


let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
];

let bestHotel = hotels.find(h => h.rating > 4.5);

console.log(bestHotel);



// 5. Student Pass/Fail System


let marks = [45,67,89,90,34];

let passed = marks.every(mark => mark >= 35);

console.log(passed);



// 6. OTP Verification System


let otpList = [1234,4567,7890,9876];

let enteredOtp = 4567;

console.log(otpList.includes(enteredOtp));



// 7. Movie Booking Timer


let count = 10;

let timer = setInterval(() => {
  console.log(count);

  if(count === 0){
    clearInterval(timer);
    console.log("Booking Closed");
  }

  count--;
}, 1000);



// 8. Instagram Like Counter


let likes = 0;

let likeCounter = setInterval(() => {
  likes++;

  console.log("Likes :", likes);

  if(likes === 10){
    clearInterval(likeCounter);
  }

}, 1000);


// 9. Login Authentication


let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345"){
  console.log("Login Success");
}else{
  console.log("Invalid Credentials");
}



// 10. Weather App Simulation


let internet = true;

let weatherPromise = new Promise((resolve, reject) => {

  if(internet){
    resolve("Weather Data");
  }else{
    reject("No Internet");
  }

});

weatherPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });



// 11. Amazon Product Search

let products = ["shirt", "shoe", "tshirt", "watch"];

let search = products.filter(item =>
  item.includes("shirt")
);

console.log(search);


// 12. YouTube Video Duration


let videos = [10,20,30,40];

let totalTime = videos.reduce((sum, video) => {
  return sum + video;
}, 0);

console.log(totalTime);



// 13. Swiggy Order Status


let status = "Preparing";

switch(status){

  case "Placed":
    console.log("Order Placed");
    break;

  case "Preparing":
    console.log("Food is Preparing");
    break;

  case "Out for Delivery":
    console.log("Delivery Boy Coming");
    break;

  case "Delivered":
    console.log("Order Delivered");
    break;

  default:
    console.log("Invalid Status");
}



// 14. WhatsApp Chat Analyzer


let chats = ["hi","hello","where","ok","bye"];

for(let i = 0; i < chats.length; i++){
  console.log(chats[i]);
}

console.log("Total Messages :", chats.length);



// 15. Netflix Age Restriction


let age = 20;

let result = age >= 18 ? "watch movie" : "access denied";

console.log(result);


// 16. Flipkart Product Sorting


let prices = [1200,450,9999,2500,700];

prices.sort((a,b) => a-b);

console.log(prices);



// 17. Employee Attendance


let attendance = ["present","absent","present"];

let countAttendance = attendance.reduce((obj, item) => {

  obj[item] = (obj[item] || 0) + 1;

  return obj;

}, {});

console.log(countAttendance);



// 18. Banking System


let balance = 5000;

function deposit(amount){
  balance += amount;
  console.log("Deposited :", amount);
}

function withdraw(amount){
  balance -= amount;
  console.log("Withdraw :", amount);
}

function checkBalance(){
  console.log("Balance :", balance);
}

deposit(2000);
withdraw(1000);
checkBalance();



// 19. Zomato Rating Checker


let ratings = [4.5, 3.8, 2.9, 4.7];

let lowRating = ratings.some(rating => rating < 3);

console.log(lowRating);



// 20. Real API Product Table


async function showProducts(){

  let res = await fetch("https://fakestoreapi.com/products/");
  let data = await res.json();

  let cards = data.map((item) => {

    return `
      <div>
        <img src="${item.image}" width="100">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
      </div>
    `;

  });

  document.body.innerHTML = cards.join("");

}

showProducts();



// 21. Small E-Commerce Logic

async function ecommerce(){

  let res = await fetch("https://fakestoreapi.com/products/");
  let data = await res.json();

  // Filter category
  let electronics = data.filter(item =>
    item.category === "electronics"
  );

  console.log(electronics);

  // Sort by price
  let sorted = data.sort((a,b) =>
    a.price - b.price
  );

  console.log(sorted);

  // Search product
  let search = data.filter(item =>
    item.title.toLowerCase().includes("shirt")
  );

  console.log(search);

  //Add to  Cart
  let cart = [];

  cart.push(data[0]);
  cart.push(data[1]);

  console.log(cart);

  // Total calculation
  let total = cart.reduce((sum, item) =>
    sum + item.price
  ,0);

  console.log("Total :", total);

}

ecommerce();