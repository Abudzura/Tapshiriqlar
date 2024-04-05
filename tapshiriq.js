const sentence = ["sense.", "make", "all", "will", "This"];
const reversedSentence = sentence.reverse();
console.log(reversedSentence);


function greetAliens(aliens) {
    for (let i = 0; i < aliens.length; i++) {
      console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
  }
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  greetAliens(aliens);

  









  function justCoolStuff(myStuff, coolStuff) {
    const result = [];
    for (let i = 0; i < myStuff.length; i++) {
      if (coolStuff.includes(myStuff[i])) {
        result.push(myStuff[i]);
      }
    }
    return result;
  }
  
  const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
  
  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room"
  ];
  
  console.log(justCoolStuff(myStuff, coolStuff));







  
  
function isTheDinnerVegan(meal) {
  for (let i = 0; i < meal.length; i++) {
    if (meal[i].source !== "plant") {
      return false;
    }
  }
  return true;
}

const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" }
];

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" }
];

console.log(isTheDinnerVegan(meal)); // true
console.log(isTheDinnerVegan(dinner)); // false
