/*
Data cleaner
Users are messy. When they sign up for your Task Manager, one person might type their email as  JOHN@gmail.com  (with spaces) and another might type alice@Yahoo.com. If you save them exactly like that, your database will be a disaster.

The Task:
Write a function called sanitizeUser that takes a user object containing email and role.

Email Cleaning: Trim any accidental spaces from the beginning or end and convert the entire email to lowercase.

Role Assignment: If the user provided a role (like "admin" or "editor"), keep it. If the role is missing, empty, or undefined, set a default value of "guest".

Return: Return the new, "cleaned" object.
 */

interface User {
  email: string;
  role: string;
}

const sanitizeUser = (user: User) => {
  const validRoles = ["admin", "editor"];
  let { email, role } = user;
  email = email.trim().toLowerCase();
  if (!validRoles.includes(role) || role === "" || role === undefined)
    role = "guest";
  return { email, role };
};

console.log(sanitizeUser({ email: " malu@Gmail.com", role: "uuu" }));
