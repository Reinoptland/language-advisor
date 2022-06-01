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

// hier willen we een language weten
// let language;

function generateLanguageAdvice(chosenGoal) {
  console.log("INPUT CHECK:", chosenGoal);
  // userGoal is nodig als input (argument en parameter dus)
  if (chosenGoal === "Games") {
    // hier hebben we een resultaat (een return value!)
    return "C++ / C#";
  } else if (chosenGoal === "Websites and Apps") {
    // hier hebben we een resultaat (een return value!)
    return "HTML / CSS / JavaScript";
  } else if (chosenGoal === "Working with Databases and Math") {
    // hier hebben we een resultaat (een return value!)
    return "SQL & Python";
  } else {
    console.log("OK! Bye!");
    process.exit();
  }
}

const language = generateLanguageAdvice(userGoal);
console.log("CHECK?", language);

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
