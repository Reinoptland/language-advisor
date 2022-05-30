var readlineSync = require("readline-sync");

const email = readlineSync.question("What is your email? ");

console.log(`You email is: ${email}`);
