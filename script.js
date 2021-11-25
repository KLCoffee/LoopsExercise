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
// // 4b 4c my answer
// while (harryPotterMovies <=7){
//     console.log(harryPotterMovies++);
// }
// 4b Correct answer 
while (harryPotterMovies <8){
    harryPotterMovies++;
}
// 4c
console.log(harryPotterMovies);

// Bonus
// 5a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
// 5b didn't need 2 consolelogs
for (titles of hogwartsHouses){
    console.log(titles);
 for (char of titles){
    console.log(char);
    }
}

// 6a
const quote = [ 
    "Yer",
     "A",
     "Wizard", 
     "Harry"  
];

// 6b (Correct answer not mine)
// let sentence = "";
// while   (quote !== sentence){
//     console.log(quote.join (" "));
//     break;
// }          OR
//  Using a FOR OF LOOP
 let sentence = "";
 for (word of quote){
     sentence += `${word} `;
 }
 console.log(sentence.trim());

// Using a FOR LOOP
// let sentence = "";
// for (i = 0; i <quote.length; i++){
//     // console.log(quote[i]);
//     sentence += `${quote[i]} `;
//     console.log(sentence);
// }
// console.log(sentence.trim());
// putting trim on end of sentence will cut the space at the end of the sentence even though it can't be seen in this example.
