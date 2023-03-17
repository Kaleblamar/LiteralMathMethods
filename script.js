//1a
let warmHugs = "hi, I'm Olaf and like warm hugs";
console.log(warmHugs);

//1b
console.log(warmHugs.toUpperCase());

//1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs.replace("like", "love"));
console.log(warmHugs);

//2a
let beenImpaled = "oh, look at that.I've been impaled.";
console.log(beenImpaled);

//2b
console.log(beenImpaled.slice(18));
//3a
let dotDotDot = "....";
//3b
let skullBones = `"I don't have a skull ${dotDotDot} or bones"`;
console.log(skullBones);

//4
console.log(Math.PI);

//5
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);

//BONUS
//6
let letItGo = "Let it Go!";
console.log(letItGo.repeat(2).toUpperCase());

//7
let reindeers = "Reindeer are better than people.";
console.log(reindeers.replaceAll(" ", "_"));

//8
console.log(Math.sqrt(2));
//OR
console.log(Math.SQRT2);

//9
let newRandomNumber = Math.floor(Math.random() * 17) + 7;
console.log(newRandomNumber);
