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
function generateLanguageAdvice(chosenGoal) {
  if (chosenGoal === "Games") {
    return "C++ / C#";
  } else if (chosenGoal === "Websites and Apps") {
    return "HTML / CSS / JavaScript";
  } else if (chosenGoal === "Working with Databases and Math") {
    return "SQL & Python";
  } else {
    console.log("OK! Bye!");
    process.exit();
  }
}

function determinHours(language) {
  if (language === "C++ / C#") {
    return 2000;
  } else if (language === "HTML / CSS / JavaScript") {
    return 1000;
  } else {
    return 1500;
  }
}
// hier zie je nu de flow onstaan die je in 1 oogopslag kan lezen
const goals = ["Games", "Websites and Apps", "Working with Databases and Math"];
const userGoal = getProgrammingGoal(goals);
const language = generateLanguageAdvice(userGoal);
const hours = determinHours(language);

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
