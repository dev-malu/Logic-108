/*
Your Backend Logic Problem: Day 1

Topic: Data Validation (The most important job of a Backend Developer).

The Scenario:
You are building the "Registration" part of your Task Manager. A user sends you their username and age to save in MongoDB. But you cannot trust the user! You must check the data before it touches your database.

The Task:
Write a function called validateUser that takes an object.

If the username is empty or less than 3 characters, return "Invalid Username".

If the age is not a number or is less than 18, return "Too Young".

If everything is okay, return "User Validated".
 */

interface userDataT {
  userName: string;
  age: number;
}

const validateUser = (userData: userDataT) => {
  const { userName, age } = userData;
  if (!userName || userName.length < 3) return "Invalid username";
  if (age < 18 || typeof age !== "number") return "Too young";
  return "User validated";
};

console.log(validateUser({ userName: "Ab", age: 25 }));
console.log(validateUser({ userName: "Anu", age: 15 }));
