//Get the number of dice to roll from the command line arguments
let diceRolls = process.argv[2];
let result = "";

//Roll the dice and store the results in an array
function rollingDice(diceRolled) {
  for(let i = 1; i <= diceRolled; i++) {
    if(i == diceRolled) {
      result += Math.floor(Math.random() * 6 + 1);
    } else {
      result += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return result;
}
console.log("Rolled 3 dice:", rollingDice(diceRolls));