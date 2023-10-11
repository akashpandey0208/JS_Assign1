// 1 question.
let totalPrice = 2000
let discount = 20
let finalPrice = totalPrice - (totalPrice * discount/100)
console.log("The finial Price after the discount is ",finalPrice)

// 2 question

let username = "admin";
let password = "12345";
if(username == 'admin' && password =='12345'){
    console.log("Login Successfull");
}
else{
    console.log("Invalid Login");
}

// 3 question

let indianrupee=560;
let USD = indianrupee/82;
console.log(USD);

// 4 question
let numberOfChild = 3;
let numberOfAdult = 2;
let numberofSenior = 2;
const totalfare = (numberOfChild*100+numberOfAdult*150+numberofSenior*120);
console.log(" Your total ticket price is : ",totalfare);

// 5 question
let package = "express";
switch(package) {
    case "standard" :
        console.log("Standard delivery takes 3-5 days");
        break;
    case "express" :
        console.log("Express delivery takes 1-2 days");
        break;
    case "overnight" :
        console.log("Overnight delivers the next day");
        break;            
}

// 6 question
let name = "Akash Pandey";
let email = "akashpandey0208@gmail.com";
let age = "21";
if(typeof name !=="string"){
    console.log("Name should be a string.");
}
if(typeof age !=="number"){
    console.log("Age should be a number");
}

//7 question
let arr = ["soap","brush","sugar","dal"];
for(var x of arr){
    console.log(x," ");
}

// 8 question
let count =10;
while(count >=0){
    console.log(count--);
}

// 9 question
const arr1 = [12, 256, "Akash" ," 1298"];
for(var x of arr1){
    if(typeof x == "string"){
        console.log("Found the first string: "+x);
        break;
    }
}

// 10 question 
const num = [-20,60,-51,34,-56,-25,68];
for(var x of num){
    if(x>0)
    console.log(x);
}

