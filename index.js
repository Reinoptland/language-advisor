require("dotenv").config();
const readlineSync = require("readline-sync");

function getProgrammingGoal(goalOptions) {
  console.log("CHECK input:", goalOptions); // what will this be?

  const index = readlineSync.keyInSelect(
    goalOptions,
    "What kind of thing do you want to program?"
  );

  const userGoal = goalOptions[index];
  return userGoal;
}

const goals = ["Games", "Websites and Apps", "Working with Databases and Math"];
const userGoal = getProgrammingGoal(goals);

let language;

if (userGoal === "Games") {
  language = "C++ / C#";
} else if (userGoal === "Websites and Apps") {
  language = "HTML / CSS / JavaScript";
} else if (userGoal === "Working with Databases and Math") {
  language = "SQL & Python";
} else {
  console.log("OK! Bye!");
  process.exit();
}

let hours;

if (language === "C++ / C#") {
  hours = 2000;
} else if (language === "HTML / CSS / JavaScript") {
  hours = 1000;
} else {
  hours = 1500;
}

const hoursPerWeek = readlineSync.questionInt(
  "How many hours can you study each week? "
);

const weeksToStudy = hours / hoursPerWeek;

const emailPermission = readlineSync.keyInYN(
  "Do you want your results in an email? "
);

if (emailPermission === true) {
  const email = readlineSync.question("What is your email? ");

  console.log("SEND EMAIL HERE", email);
} else {
  console.log(`
  ~~~~ Advice ~~~~

  Since you want to: 

  Program ${userGoal}
  We recommend you study: ${language}
  Which should take ${hours} hours in total
  With your study goal of ${hoursPerWeek}
  This should take around ${weeksToStudy} weeks

  You Can Code It my friend!
  
  ~~~~ ++++++ ~~~~
  `);
}
