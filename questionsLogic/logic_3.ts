/*
Password Validator.
Write a function that ensures a password is secure before it gets saved.

The Rules:
Length: Minimum 8 characters.
Number: Must contain at least one digit (0-9).
Special: Must contain at least one special character (like ! @ # $ %).
 */

// const validatePassword = (password: string) => {
//   const special = ["!", "@", "#", "$", "%"];
//   const pArr = password.split("");
//   let hasSpecial = false;
//   let hasDigit = false;
//   for (let v of special) {
//     if (pArr.includes(v)) {
//       hasSpecial = true;
//       break;
//     }
//   }
//   console.log(`has special = ${hasSpecial}`);
//  for(let p of password) {
//   if( p >= '0' && p <= '8')
//  }
//   console.log(`has digit = ${hasDigit}`);
//   if (password.length >= 8 && hasSpecial && hasDigit) return "Valid password";
//   return "Invalid password";
// };

// console.log(validatePassword("Secure123!")); // Should be true

//Improved Logic

const validatePassword = (password: string) => {
  const special = ["!", "@", "#", "$", "%"];
  let hasSpecial = false;
  let hasDigit = false;

  if (password.length < 8) {
    return "Invalid password: less than 8";
  }

  for (let v of special) {
    if (password.includes(v)) {
      hasSpecial = true;
      break;
    }
  }

  if (!hasSpecial) return "Invalid password no specials";

  for (let v of password) {
    console.log(v);
    if (v >= "0" && v <= "9") {
      hasDigit = true;
      break;
    }
  }
  if (!hasDigit) return "Invalid password: no digit";
  return "Valid password";
};

console.log(validatePassword("Secure"));
