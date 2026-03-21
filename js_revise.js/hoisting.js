//1.Hoisting
// JavaScript reads your code twice. The first time, it "hoists" (lifts) declarations to the top.
//var is hoisted and initialized as undefined. function declarations are fully hoisted (body and all).

console.log(myGhost);
var myGhost = "I am here now!";

sayHello();
function sayHello() {
  console.log("Hello from the top!");
}

//TDZ (Temporal dead zone)

//let and const are stricter they can be hoisted but cannot be initialised so ..it gives error if we try to console it or use it without initializing..
let points = 100;
console.log(points);

//closure/factory function
// here local variable balance can we got inside the funxtion but we cannot get it outside so it bahave  as a private variable.Because of Closures, the inner functions "remember" that variable, but nothing outside that function can touch it. It’s truly private.
//this factory function is not a class for a class we need new keyword

const createAccount = (initialName) => {
  let balance = 0; //private variable

  return {
    deposit(amount) {
      balance += amount;
      return `${initialName}, balance is ${balance}`;
    },
    withdraw(amount) {
      if (balance < amount) return "Insufficient funds";
      balance -= amount;
      return `balance is ${balance}`;
    },
  };
};

const account = createAccount("ABZ");
console.log(account.deposit(1000));
console.log(account.balance); // undefined because it is priivate

/*
Can you write a function called once?

The Goal: It takes a function as an argument and returns a version of that function that can only be called one time. Any future calls should just return "Already called!"
 */

const once = (fn) => {
  let hasBeenCalled = false;
  let result;
  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn();
      return result;
    }
    return "Already called";
  };
};

const launchRocket = () => "Launched";
const launchOnce = once(launchRocket);

console.log(launchOnce());
console.log(launchOnce());

//Drill 1: The "Counter Factory" (The Classic)
/*
  The Logic: You need a function that defines a count variable. It then returns an object with two methods: increment and decrement.
 */

const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
};

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.count);

//Drill 2:
/*
This tests if you can pass a variable into the outer function and use it in the inner function.

The Task: Write a function createGreeting that takes a suffix (like "!!!"). It should return a new function that takes a name and returns the name plus that suffix.
 */

const createGreeting = (suffix) => {
  return function (name) {
    return `${name}${suffix}`;
  };
};

const exited = createGreeting("!!!");
const normal = createGreeting(".");

consoel.log(exited("mmm"));
consoel.log(normal("mmm"));

const createVault = (secretKey) => {
  let isLocked = true;
  return {
    unlock(key) {
      if (key === secretKey) isLocked = false;
    },
    viewSecret() {
      if (!isLocked) return `The treasure is gold!!`;
      return "Access denied";
    },
    lock() {
      isLocked = true;
    },
  };
};

const myValut = createVault("AAA");
console.log(myValut.viewSecret()); //Access Denied
myValut.unlock("AAA");
console.log(myValut.viewSecret());
