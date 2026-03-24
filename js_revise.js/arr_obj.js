// Creation → Access → Basic Methods → Modern ES6 → Real-world Scenarios

//1.Creation and the reference rule

//Array: An ordered list . (queue, a list of message) ---> here order matters
//Object: A collection of labeled data.Use it when description matters(a user profile,a product details)

// ```
// console.log([1, 2] === [1, 2]); // FALSE
// console.log({ a: 1 } === { a: 1 }); // FALSE
// ```
//Because JS compares the "address" in memory, not the contents. This is why we eventually need "copying" (which we will save for later).

// ```
// Essential Array Methods (The "Toolbox")
// You don't need to memorize 30 methods. You need these 6.

// Method	            Goal	                            Returns	Original Changed?
// .push()	    Add to end	New length	                      Yes (Mutation)
// .pop()	    Remove from end	The item removed	            Yes (Mutation)
// .indexOf()	Find a position	The index (0, 1, 2...)	      No
// .includes()	Check if exists	true / false	                No
// .slice()	  Cut a piece out	A new array	                  No
// .splice()	  Add/Remove middle	A new array	                Yes (Dangerous!)
// ``````
// for...of: Best for Arrays. It gives you the Value.
// for...in: Best for Objects. It gives you the Key.
// .forEach(): A method that runs a function for every item.
// ```;
// I have an array of prices. I want to add 10% tax to each and log it.

const price = [100, 200, 300];

for (let v of price) {
  const withTax = v * 0.01;
  console.log(v + withTax);
}

//Object(Dynamic access)

const laptop = {
  brand: "mac",
  ram: 220,
  isSSD: true,
  upgrade() {
    return (this.ram += 8);
  },
};

console.log(laptop.ram);
console.log(laptop.upgrade());

/*
Add a student: Create a new array updatedClassroom that has all the original students PLUS a new one: { name: "Jake", grade: 85 } using the Spread operator.

Find the topper: Use .find() to get the student object who has the grade 90.

Check for failures: Use .some() (a new one for you! Google it or guess) to see if any student has a grade below 65.

Write the code for these three tasks. This is exactly what a Day 1 task at a Junior Dev job looks like!
 */

const classroom = [
  { name: "John", grade: 75 },
  { name: "Sarah", grade: 90 },
  { name: "Mike", grade: 60 },
];

const updatedClassroom = [...classroom, { name: "Jack", grade: 85 }];
const highest = updatedClassroom.find((n) => {
  n.grade === 90;
  return n;
});
console.log(highest);

const less = updatedClassroom.some((student) => student.grade < 65);

const developer = {
  name: "Arun",
  details: {
    experience: "2 years",
    skills: ["JS", "HTML", "CSS"],
  },
};

console.log(developer.details.skills[2]);
developer.details.skills.push("React");
console.log(developer?.contact?.phone);

const fridge = {};
fridge.milk = 2;
//const vegetable = ['carrot'];
//fridge.vegetable = ['carrot'];
//fridge['vegetable'] = ['carrot'];

const updatedFridge = { ...fridge, vegetable: ["carrot"] };
updatedFridge.vegetable.push("potato");

const upFridge = { ...updatedFridge, milk: 0 };
