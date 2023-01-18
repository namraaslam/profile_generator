const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ", "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ", "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ", "What is your superpower? In a few words, tell us what you are amazing at! "]

const description = function () {
  console.log(`\n${qAnswers[0]} loves listening to ${qAnswers[2]} while ${qAnswers[1]}, devouring ${qAnswers[4]} 
for ${qAnswers[3]}, prefers ${qAnswers[5]} over any other sport, and is amazing at ${qAnswers[6]} at inopportune times.`);
};

let qAnswers = [];
let i = 0;

const qAndA = function () {
  rl.question(questions[i], (feedback) => {
    qAnswers.push(feedback);
    i++;
    if (i < questions.length) {
      qAndA();
    } else {
      description();
      rl.close();
    }

  });
};

qAndA();