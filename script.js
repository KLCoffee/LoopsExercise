// LOOPS EXERCISE
// 1
for (i = 1; i <= 7; i++){
    console.log(i);
}
console.log("=======");
// 2
for (i = 5; i <= 25; i+=4){
    console.log(i);
}
console.log("=========");

// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
];
// 3b
for (item of wizards){
    console.log(item);
}
// 4a
let harryPotterMovies = 0;
// 4b 4c
while (harryPotterMovies <=7){
    console.log(harryPotterMovies++);
}

console.log(harryPotterMovies);

// Bonus
// 5a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
// 5b
for (titles of hogwartsHouses){
    console.log(titles);
 for (char of titles){
    console.log(char);
    }
}

// 6a
const quote = [ 
    `"Yer`,
     `A`,
     `Wizard`, 
     `Harry"`  
];


