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
