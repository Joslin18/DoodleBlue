/*
const stu =["Priya", "Arun", "Divya", "Rahul", "Sneha"];
console.log(stu[0] + stu[4]);
stu.push("Karthik");
console.log(stu);
stu.pop(5);
console.log(stu);
const frd= stu.slice(1,4);
console.log(frd);
stu.splice(2,1);
console.log(stu);
console.log(stu.includes("Priya"));



const prices=[10,20,30];
const increase= prices.map(prices=> prices*20);
console.log(increase);
console.log(prices);


const emp={
    name:"Priya",
    salary: 30000,
};
console.log(emp.name);
console.log(emp["salary"]);
emp.salary= 35000;
console.log(emp.salary);
emp.city= "Chennai";
delete emp.city;
console.log(emp);

const student={
    name:"Priya",
    address:{
        city:"Chennai",
        state:"Tamilnadu",          
    }
};
console.log(student.name);
console.log(student.address.city);
console.log(student.address.state);

const students={
    name1:"Priya",
    age: 20,
    course:"React"
};
const {name1, age, course}= students;
console.log(name1);
console.log(age);
console.log(course);

const user={
    name:"Priya"
};
const{name:stuname,
    city="Chennai"
}=user;
console.log(stuname);
console.log(city);

let x;
console.log(x);
x= 10;

greet();
function greet(){
    console.log("print");
}

//console.log(re);
//const re = (great) => {
//    console.log("print")
//};

function Account(){
    let Balance = 1000;
    function deposit(amount){
        Balance += amount;
        console.log("BalancAmount: " + Balance);
    }
    return deposit;
}
const myAccount = Account();
myAccount(500);
myAccount(700);

const myPro = new Promise((resolve, reject) => {
    let pay = true;
    if(pay){
        resolve("Payment Successful");
    }
    else{  
        reject("Payment Failed");
    }
});
myPro.then((result) => 
    console.log(result))
.catch((error) =>
    console.log(error))
.finally(() => console.log("Payment Process Completed"));

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}
async function displayData(){
    console.log("Start");
    const resu = await getData();
    console.log(resu);
    console.log("End");
}
displayData();

function sayHello(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 1000);
    });
}

async function greet(){
    console.log("Before");
    const msg = await sayHello();
    console.log(msg);
    console.log("After");
}
greet();
console.log("Outside");


console.log("one");
setTimeout(()=> console.log("Two"),0);
console.log("three");

setTimeout(()=> console.log("Confirm"),3000);
console.log("Registration received");*/

console.log("Start");
setTimeout(() => console.log("Timer"),0);
Promise.resolve().then(() => console.log("Promise"));
console.log("Finish")