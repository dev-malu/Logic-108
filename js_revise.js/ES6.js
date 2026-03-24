//. The "Clean Unpacking" (Destructuring)
//Instead of writing const name = user.name; const age = user.age;, we do this:

const user = { name: "Gemini", age: "1", role: "AI" };

const { name, role } = user;
console.log(name);

//The 'Big Three' array method

//filter
//map
//reduce - trasforming datastructure - turning an array into the object

const products = [
  { name: "Laptop", price: 1000, category: "tech" },
  { name: "Phone", price: 500, category: "tech" },
  { name: "Shirt", price: 20, category: "fashion" },
  { name: "Shoes", price: 80, category: "fashion" },
];

const newar = products
  .filter((v) => v.category === "tech")
  .map((v) => v.name.toUpperCase());
console.log(newar);

const printPrice = ({ name, price }) => {
  return `${name} costs ${price}`;
};

products.forEach((v) => console.log(printPrice(v)));

const ar = [1, 2, 3, 4, 5, 8];
const val = ar.reduce((acc, v) => acc + v, 0);
console.log(val);

const getUsername = (user) => user.name || "guest";

/*
|| (Logical OR): Returns "guest" if user.name is any falsy value: "" (empty string), 0, false, null, or undefined.

?? (Nullish Coalescing): Returns "guest" only if user.name is null or undefined.
 */

/*
Muscle Memory Drill: The "Categorizer"

Imagine you need to group those products by their category so you can display them in different sections of a website.
 */

const grouped = products.reduce((acc, product) => {
  const { category, name } = product;

  //1.check if teh specific category [tech] exists in our acc
  if (!acc[category]) {
    acc[category] = []; //create. anew empty drawer for the tech
  }

  //2.Push that product name into that category array
  acc[category].push(name); //put laptop into tech drawer

  //always return th eacc
  return acc;
}, {});

console.log(grouped);

/*
......Answer....
{
tech: ["Laptop", "Phone"],
fashion: ["Shirt", "Shoes"]
}
 */

//count the occurance of each fruit
const fruits = ["apple", "orange", "apple", "banana", "apple", "orange"];

const fruitCount = fruits.reduce((acc, fruit) => {
  if (!acc[fruit]) {
    acc[fruit] = 0;
  }
  acc[fruit] += 1;
  return acc;
}, {});

console.log(fruitCount);

//
