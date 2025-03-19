/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = false;
const hasMap = true;
const hasSword=false;
const hasCompass = true;
const hasJacket = true;

console.log("You see three paths: one leads to the mountains, to the village, and the other to the forest.");
const choice = readline.question("Do you go to the 'mountains' or the 'village' or 'forest'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && hasJacket) {
   
    console.log("Get ready !");
    const climb = readline.question("Do you want to climb the mountain (yes/no) ?");
      if (climb === "yes") {
        console.log("It's windy and cold in the mountains, zipup your jacket !");
      } else if(climb === "no"){
        console.log("Choose either Village or Forest.");
      }else {
        console.log("You get lost and wander aimlessly if you do not choose correctly.");
      }
} else if (choice === "village" && hasMap) {
  if (hasCompass){
    console.log("You can reach your destination quickly using map and compass.");
  }
  else {
    console.log("Delay reaching your destination as there's no compass to find the correct way.");
  }
} else if (choice === "village" && !hasMap) {
  console.log("It is difficult to find your way to the village with out Map.");
} else if(choice==="forest" && hasSword){
  console.log("You can use the sword to protect yourself from wild animals in forest.");
}else if(choice==="forest" && !hasSword){
  console.log("It is risky to go to Forest with out sword.");
}else {
  console.log("You get lost and wander aimlessly if you do not choose correctly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/