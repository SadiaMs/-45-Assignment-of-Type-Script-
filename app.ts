///ex 2
// personName : store a person name in a variable,and print a message to that person. your message should be simple, such as, "hello Eric, whould you like to learn some Python today?"

// let personName: string ="ERIC";
// console.log(`HELLO ${personName},WHOULD you like to learn some Phthon today?`);


// ///ex 3
// //Name cases: store a person name in a variable,and then print that person name in lowercase,upper case, and titlecase.
// // lowercase
// let personName: string = "Sadia";
// console.log("lowercase:" , personName.toLowerCase()); ///to lowercase
// // UPPER CASE
// console.log("uppercase:" , personName.toUpperCase()); ///to uppercase
// // title case
// console.log("titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));


///ex 4
//famous qoutes: find a qoute from a famous person you admire. print the qoute and the name of its author. your output should look something like the following, including the quotation marks:
//Albert Einstein once said, "A person who never made a mistake never tried anything new".
// let qoute = "A person who never made a mistake never tried anything new";
// let author = "Albert Einstein";
// console.log(`${author}once said, "${qoute}`);


///ex 5
//famous Quote 2 :repeat ex 4, but this time store the famous person name in a variable called famous person. then compose your message and store it in a new variable called message. print your message.
// let famous_person : string = "Albert Einstein";
// let quote : string = "a person who never made a mistake never tried anything new";
// let message : string = `${famous_person},Once said, ${quote}`;
// console.log(message);

/// ex 6
/// Question:stripping Names: store a person name,
// and include some whitespace characters at the beginning and end of the name.
// make sure you use each character combination, "\t", and "\n",at least once.
// print the name once, so the whitespace around the naem is displayed. 


// //then print the name after striping the whitespace.
// let PersonName : string = `\n\t SADIA MUTAHAR \n\t`;
// console.log(PersonName);
// let striping: string = PersonName.trim();
// console.log(striping);

///ex 7
 //test 7  Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.

// 8 test include You should create four lines that look like this:
// //  output should simply be four lines with the number 8 appearing once on each line.
// console.log(5 + 3)

// // print result:
// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(16/2);


//ex 8
//// ex 8 
/// Question: you should create four lines that look like  this:
///console.log(5 + 3)

// horizontal lines

// console.log ("horizontal lines");
// console.log(5+3);
// console.log ("horizontal lines");
// console.log(11-3);
// console.log ("horizontal lines");
// console.log(4*2);
// console.log ("horizontal lines");
// console.log(16/2);


////ex 9
///// Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.



// let favoriteNumber: Number= 4;
// console.log(`My favorite number is ${favoriteNumber}`);

/// ex 10
/// addind comments: choose two of the programs u have written , and at least one comment to each. if you don't have anyting specific to write b/c ur programms are too simple at this point, 
////just add ur name and the current date at the top of each program file. then write one sentence describing what the program does.
///// EXCERSISE 10

///// date: 28.march.2024
///my name: sadia
//console.log("i will BE achieveD my goal of life, in shah ALLAH");


/////ex 11
///

/// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

// store  the names of my friends in an array called names:

// let names: string[] =['Mutahar', 'Moatar','Haziq','IT course' ];
// for(let i=0; i<names.length; i++) {
//     console.log(names[i]);
// }


///ex 12
//// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
// greetings programme names and message


// let names: string[] =['Mutahar', 'Moatar','Haziq','IT course' ];
// let message: string= 'Today is my son 6th birthday."MOATAR". Allah save him for evil. Ameen.......';
// for(let i=0; i<names.length; i++){
//     console.log(message + names[i]);
// }


"use strict";
/// EX 13
// ///// Q: your own array favorites mode of transformation, such as a motorcycle or a car, and make a list that stores several examples.
// /// use your list to print a series of statements about these items, suc as "i would like to own a Honda motorcycle".
// let transfortationMode = ["car", "motorcycle", "bicycle", "bus", "airplane", "van"];
// for (let i = 0; i < transfortationMode.length; i++) {
//     console.log(`i would to own a ${transfortationMode[i]}.`);
// }
// ///transfortationMode.forEach(mode => {
//   console.log(`i would like to own a ${mode}`);
///});



///EX 14
///guest list: if u invite anyone,living or deceased,to dinner,who whould you whould you invite?
////make a list that includes at least three people you`d like to invite to dinner. 
///  then use ur list to print a message to each person, inviting them to dinner.

// guest list

// let guest_list: string [] = ['Mutahar','Moatar','Haziq','Siddiq'];
// for(let i=0; i<guest_list.length; i++){
//     console.log(' \n Respected sir/Madam '  + guest_list[i] + ',\t \n We invited you on dinner tomorow.\n\n Thank you');
// }

// export{guest_list} 



///// ex 15
////changing guest list : you just heard that one of your guests can't make the dinner....///
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

//change guest list who not present
// guest list

// let guest_list: string [] = ['Mutahar','Moatar','Haziq','Siddiq'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam . ' +guest_list[i] + ',\n\nnow invited you on dinner tomorow.\n\nthank you\n\n\ ' )
// }

// let not_present: string= 'Mutahar';
// let new_guest:  string= 'Qadir';
// guest_list[1]= new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam .' +guest_list[i] + ',\n\now invited you on dinner tomorow. \n\nthank you\n\n\ ')
// }
//     console.log(`Mr ${not_present} will not coming tomorow at dinner party`);



///ex 16
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.


// found bigger  table :

// let guest_list: string [] = ['Mutahar','Moatar','Haziq','Siddiq'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/Madam . ' +guest_list[i] + ',\n\nnow invited you on dinner tomorow.\n\nthank you!\n\n\ ' )
// }

// let not_present: string= 'Mutahar';
// let new_guest:  string= 'Qadir';
// guest_list[1]= new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam .' +guest_list[i] + ',\n\n\tNow invited you on dinner Tomorow. \n\n\tThank you!\n\n\ ')
// }
//     console.log(`Mr. ${not_present} will not coming Tomorow at dinner party`);

//     console.log('Good News! we find big table so we are inviting more 3 guest.')

//     guest_list.unshift('Chunnu');
//     guest_list.splice(2,0, 'Munnu');
//     guest_list.push('Pappu');

//     for(let i=0; i<guest_list.length; i++){
//         console.log('Respected sir/Madam .' +guest_list[i] + ',\n\n\tNow invited you on dinner tomorow. \n\n\tThank you!\t\n\n\ ')
//     }



///ex 17
/// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.



// var guest_list = ['Mutahar','Moatar','Haziq','Siddiq'];
// // for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected sir/Madam . ' + guest_list[i] + ',\n\nnow invited you on dinner tomorow.\n\nthank you!\n\n\ ');
// // }
// var not_present = 'Mutahar';
// var new_guest = 'Qadir';
// guest_list[1] = new_guest;
// // for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nnow invited you on dinner tomorow. \n\nthank you!\n\n\ ');
// // }
// console.log("MR. ".concat(not_present, " Will not coming tomorow at dinner party"));

// // arry me 3 guest add kiye han.
// console.log('Good News! \n\t We find big table so we are inviting more 3 guest.\n\n');
// guest_list.unshift('Chunnu');
// guest_list.splice(2, 0, 'Munnu');
// guest_list.push('Pappu');

// //  7 guest NAME prinT.
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected sir/Madam .' + guest_list[i] + ',\n\nNow invited you on dinner Tomorow. \n\n\tThank you!\t\n\n\ ');
// }

// // sorry guest not inited
// console.log('\nSorry we can not arrange big table, only two persons will be invited \n\n');

// //  yahan hum ne guest remove kiye han.
// while(guest_list.length > 2){
//     let remove_guest= guest_list.pop();
//     console.log(`Sorry Sir,${remove_guest},\n\n\t You are not invited for dinner \n\n` );

// }
// // hamare jo 2 baqi guest bache han .

// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected sir/Madam .' + guest_list[i] + ',\n\n You are still in invited. \n\nThank you!\n\n\ ');
// }

// // me ne sare guest arry sec remove kr diye or 2 guest invited han
// guest_list.splice(0,2);
// console.log(guest_list);



// ex 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let placeToVisit : string [] = ["London","Paris","New York","Suadia Arabia","UAE","Kashmeer","Chaina"];

// console.log("orignal order :", placeToVisit);
// console.log("alphabetical order :", placeToVisit.slice().sort());
// console.log("orignal order :", placeToVisit);
// console.log("reverse alphabetical order :", placeToVisit.slice().sort().reverse());
// console.log("orignal order :", placeToVisit);
// console.log("reverse order changed");
// placeToVisit.reverse();
// console.log(placeToVisit);
// console.log("orignal order :", placeToVisit.sort());
// console.log(placeToVisit);
// console.log("reverse alphabetical order changed :", placeToVisit.sort().reverse());
// console.log(placeToVisit);



///ex 19
// 19 EXCERCISE Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// import{ guest_list } from '../ex 14/app'
// console.log(` n\ PRINTING NUMBER OF GUEST INVITED`)
// console.log(`We had finally invited ${guest_list.length} from excercise 14`)



///ex 20
///think of something u could store in an array.
// let sweets : String [] = ['candy','cake','chocolates','lolipops','icecream'];
// console.log("list of sweets:")
// for (let top of sweets) {
//     console.log(top);
// }




/////ex 21 /////
/////  they think of something u could store in a TS Object.
// ///write a progrAM that creates Objects containing these items.
// interface item {
//     name: string,
//     price: number,
// }
// ///creat 2 Objects
// const Book : item = {
//     name :"Basic TypeScript",
//     price: 500,
// }
// const Book2 : item = {
//     name : "Pro TypeScript",
//     price : 600,
// }
// console.log(`\nBook Name: \n <<<<${Book.name}>>>>\n#Price: ${Book.price}\n`);
// console.log(`\nBook2 Name: \n <<<<${Book2.name}>>>>\n #Price: ${Book2.price}\n`);




////ex 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.

// let array:(string | number) []= ["sadia","mutahar", 1,2,3,"moatar","haziq"];
// console.log(array[9]);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);





///ex 23
// conditional tests: write a series of conditional tests. print a statemenet describing each test ansd yore prediction for the results of each test.
/// let car = 'subaru';


//console.log("is car == 'subru'? I predict True.")
//console.log(car== 'subaru')
///>>>>> look closely at your results, and make sure you understand why each line evaluTESto true or false.
// ////....create atleast 10 tests. have at least5 tests evaluate to true  and another tests evaluate to false.

// let car: string = 'subaru';

// console.log("\n----> 5 tests evaluate to true");

// // Test 1: Check if car is equal to 'subaru'
// console.log("Is car equal to 'subaru'? I predict true.");
// console.log(car === 'subaru');

// // Test 2: Check if car is not equal to 'toyota'
// console.log("Is car not equal to 'toyota'? I predict true.");
// console.log(car !== 'toyota');

// // Test 3: Check if the length of car is greater than 4
// console.log("Is the length of car greater than 4? I predict true.");
// console.log(car.length > 4);

// // Test 4: Check if the length of car is less than or equal to 6
// console.log("Is the length of car less than or equal to 6? I predict true.");
// console.log(car.length <= 6);

// // Test 5: Check if car starts with the letter 's'
// console.log("Does car start with 's'? I predict true.");
// console.log(car.startsWith('s'));

// console.log("\n----> 5 tests evaluate to false");

// // Test 6: Check if car is equal to 'honda'
// console.log("Is car equal to 'honda'? I predict false.");
// console.log(car === 'honda');

// // Test 7: Check if car is in uppercase
// console.log("Is car in uppercase? I predict false.");
// console.log(car.toUpperCase() === 'SUBARU');

// // Test 8: Check if car is equal to 'Audi'
// console.log("Is car equal to 'Audi'? I predict false.");
// console.log(car === 'Audi');

// // Test 9: Check if the length of car is exactly 7
// console.log("Is the length of car exactly 7? I predict false.");
// console.log(car.length === 7);

// // Test 10: Check if car ends with the letter 'a'
// console.log("Does car end with 'a'? I predict false.");
// console.log(car.endsWith('a'));





////ex 24
//// more condtional tests : ou don`t have to limit the number of tests you create to 10. if you want to try more cOMPARIONS, write more tests. have at least one true and one false . false result for each of the following : 
// let str1 = "Sadia";
// let str2 = "Mutahar";
// let num1 = 5;
// let num2 = 10;
// let array = [1, 2, 3, 4];
// /// test for equality and inequality with strings
// console.log("test for equality and inequality with strings:");
// console.log(str1 === 'Sadia');
// console.log(str1 === str2);
// /// test  using the lower case function
// console.log("\ntest using the lower case function:");
// console.log(str1.toLowerCase()=== 'sadia');
// console.log(str2.toLowerCase()!== 'mutahar');
// //  numerical tests
// console.log(1<2);
// console.log(num1>= num2);
// console.log(num1 === 5);
// console.log(num2 !== 10);
// /// test using "and" or "or" functions
// console.log("\nTests using 'and' and 'or' OPERATORS:");
// console.log((num1 <10) && (num2 > 5));
// console.log((num1 < 3) || (num2 > 15));
// ////test whethere an item is in an arra
// console.log("\ntest whether an item is in an array:");
// console.log(array.includes(3));
// console.log(array.includes(6));
// //test whether an item is not ina array

// console.log("\ntest whether an item is not in an array:");
// console.log(!array.includes(6));
// console.log(!array.includes(2));





///ex 25
// Alien Colors #1: Imagine an alien was just shot down in a game.
//  Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// ////...write an if statement to start whether the aline`s color is green. if it is, print a message that the player just earned 5 point.

// let alien_color :string = "green";
// if (alien_color === "green") {
//     console.log("Congratulations! yor just earned 5 points!");
// }
// // Write one version of this program that passes the if test and another that fails. 
// // The version that fails will have no output.)
// alien_color = "red";
// if (alien_color === "green") {
//     console.log("You lose!");
// }





////ex 26
///// Alien Colors #2: Choose a color for an alien as 
// you did in Exercise 25, and write an if-else chain.


//  Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// /// 1st version
// let alienColor: string = "green";

// // write an if-else chain.
// // If the alien’s color is green,
// //print  the player just earned 5 points for shooting the alien.

// if(alienColor === "green") {
//     console.log("Congratulations! you have earned 5 points for shooting the alien");
// }
// else {
//     console.log("Congratulations! you have earned 10 points for shooting the alien");
// }
// ///2nd version
// alienColor = "red";
// if(alienColor === "green") {
//     console.log("Congratulations! you have earned 5 points for shooting the alien");
// }
// else {
//     console.log("Congratulations! you have earned 10 points for shooting the alien");
// }




////ex 26
///// Alien Colors #2: Choose a color for an alien as 
// you did in Exercise 25, and write an if-else chain.


// //  Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// /// 1st version
// let alienColor: string = "green";

// // write an if-else chain.
// // If the alien’s color is green,
// //print  the player just earned 5 points for shooting the alien.

// if(alienColor === "green") {
//     console.log("Congratulations! you have earned 5 points for shooting the alien");
// }
// else {
//     console.log("Congratulations! you have earned 10 points for shooting the alien");
// }
// ///2nd version
// alienColor = "red";
// if(alienColor === "green") {
//     console.log("Congratulations! you have earned 5 points for shooting the alien");
// }
// else {
//     console.log("Congratulations! you have earned 10 points for shooting the alien");
// }





/// ex 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age =2;
// if (age < 2) {
//     console.log(" person is a baby.");
// }
// else if (age >= 2 && age < 4) {
//     console.log("person is a toddler.");
// }
// else if (age >= 4 && age < 13) {
//     console.log("person is a kid.");
// }
// else if (age >= 13 && age < 20) {
//     console.log("person is a teenager.");
// }
// else if (age >= 20 && age < 65) {
//     console.log(" person is an adult.");
// }
// else {
//     console.log("person is an elder.");
// }



// /// ex 29
// /////// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// // if statements that check for certain fruits in your array.


// // // CHECK SPECIFIC FRUITS USING INDEPENDENT OF STATEMEN
// // let favoriteFruits: string[] = ["apple", "banana", "strawberry", "kiwi", "mango"];

// // if (favoriteFruits.includes("apple")) {
// //     console.log("I love apples!");
// // }

// // if (favoriteFruits.includes("banana")) {
// //     console.log("\nBananas are delicious!");
// // }

// // if (favoriteFruits.includes("strawberry")) {
// //     console.log("\nStrawberries are so sweet!");
// // }

// // if (favoriteFruits.includes("kiwi")) {
// //     console.log("\nKiwi is a refreshing fruit!");
// // }

// // if (favoriteFruits.includes("mango")) {
// //     console.log("\nMangoes are absolutely divine!");
// // }



// //ex 30
// //// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array,
// //  and print a greeting to each user:

// // // test 30 
// // const usernames: string[] = ['admin', 'mutahar', 'sadia', 'moatar', 'haziq', 'siddiq'];
// // for (const username of usernames) {
// //     if (username.toLowerCase() === 'admin') {
// //         console.log(`\nHello ${username}, would you like to see a status report?`);
// //     } else {
// //         if (username.toLowerCase() === 'siddiq') {
// //             console.log(`\nHello ${username}, thank you for logging in again.`);
// //         } else {
// //             console.log(`\nHello ${username}, Welcome back to the website !`);
// //         }
// //     }
// // }





// /// ex 31
// //set a value for the variable age, and then:
// let age: number = 25;

// // If the person is less than 2 years old, print a message that the person is a baby
// // If the person is at least 2 years old but less than 4, print a message that the person is a toddler
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // • If the person is age 65 or older, print a message that the person is an elder.
// if(age < 2){
//     console.log(" person is a baby.");
// }
// else if(age >= 2 && age < 4){
//     console.log("person is a toddler.");
// }
// else if(age >= 4 && age < 13 ){
//     console.log("person is a kid.");
// }

// else if(age >= 13 && age < 20 ){
//     console.log("person is a teenager.");
// }

// else if(age >= 20 && age < 65 ){
//     console.log(" person is an adult.");
// }
// else{
//     console.log("person is an elder.");
// }

// // test 31  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed.


// // Declare an empty array of strings for users
// let users: string[] = []; 


// // Check if the array is empty
// if (users.length === 0) {
//     console.log("We need to find some users!"); // Print message if array is empty
// } else {
//     // Iterate through the array and remove all usernames
//     users.forEach(function(user) {
//         console.log("Removing user: " + user); // Log the removal of each user
//     });

//     users = []; // Empty the array after removing all usernames
//     console.log("All users have been removed."); // Print confirmation message
// }





///ex 32
// // List of current users
// let current_Users: string[] = ['mutahar', 'sadia', 'moatar', 'haziq', 'siddiq'];

// // List of new users
// let new_Users: string[] = ['mutahar', 'sadia', 'moatar', 'haziq', 'siddiq'];

// // Convert currentUsers list to lowercase for case insensitive comparison
// let current_UsersLower: string[] = current_Users.map(user => user.toLowerCase());

// // Loop through newUsers list
// for (let new_User of new_Users) {
//     // Check if new username is already used (case insensitive)
//     if (current_UsersLower.includes(new_User.toLowerCase())) {
//         console.log(`Sorry, the username '${new_User}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`The username '${new_User}' is available.`);
//     }
// }


///ex 33
// // Ordinal Numbers: Ordinal numbers indicate their position in a array, 
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
// //  and each result should be on a separate line.

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const num of numbers) {
//     let ordinalEnding: string;
    
//     if (num === 1) {
//         ordinalEnding = "st";
//     } else if (num === 2) {
//         ordinalEnding = "nd";
//     } else if (num === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
    
//     console.log(`${num}${ordinalEnding}`);
// } 





///ex 34
// // Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// // Array of favorite pizzas
// let favoritePizzas: string[] = [" fagitta ", "BBQ Chicken", "Spicy Beef", 'exta chesse'];

// // Printing the names of each pizza
// console.log("Names of favorite pizzas:");
// for (let pizza of favoritePizzas) {
//     console.log(pizza);
// }

// // Printing a sentence using the name of each pizza
// console.log("\nSentences about favorite pizzas:");
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Additional sentence about how much I like pizza
// console.log("\nI really love pizza!");







// ////ex 35
// // Animals: Think of at least three different animals that have a common characteristic. 
// // Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// //  • Modify your program to print a statement about each animal, such as A dog would make a great pet. •
// //   Add a line at the end of your program stating what these animals have in common. 
// // You could print a sentence such as Any of these animals would make a great pet!


// // // List of animals with a common characteristic
// // const animals: string[] = ["camel", "horse", "goat", 'cow','cat'];


// // // Print out the name of each animal using a for loop
// // console.log("List of animals:");
// // for (const animal of animals) {
// //     console.log(animal);
// // }


// // // Print a statement about each animal
// // console.log("\nStatements about each animal:");
// // for (const animal of animals) {
// //     console.log(`\tA ${animal} Would make a great pet.`);
// // }

// // // Print what these animals have in common
// // console.log("\nWhat these animals have in common:");
// // console.log("\nAny of these animals would make a great pet!");




// ///ex 36
// // T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// // Call the function.

// function makeShirt(size: string, message: string): void {
//     console.log(`\nThe shirt size is ${size.toUpperCase()} \n and the message on it says:\t '${message}'.`);
// }

// // Example usage:
// makeShirt("\n medium", "\n\tRight Choise T-shirt!");







// ////ex 37



// // Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
// //  and a shirt of any size with a different message.

// function makeShirt(size: string = "large", message: string = "I love TypeScript"): void {
//     console.log(`The shirt size is ${size.toUpperCase()} and the message on it says: '${message}'.`);
// }

// // Making a large shirt with default message
// makeShirt();

// // Making a medium shirt with default message
// makeShirt("medium");

// // Making a shirt of any size with a different message
// makeShirt("small", "Good Looking!");








///// ex 38
/// cities : write a function called describe_city() that accepts the name of a city and its country.
////the function should print a simple sentence, sach as karachi is in pakistan.
/// give the perameter for the country as default value.
///call your function for three different cities,
// //// at least one of which is not in the default country.
// function describe_city(city: string,country: string = 'Pakistan'): void 
// {
//     console.log(`${city} is in ${country}`)
// }
// // Call the function for three different cities

// describe_city('karachi') /// default name
// describe_city('Dhaka', 'India')
// describe_city( 'Hyderabad', 'pakistan')







/// ex 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// //The function should return a string formatted like this:
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// // Example usage:
// console.log(city_country("\nHyderabad", "Pakistan"));     /// Output: Hyderabad, Pakistan
// console.log(city_country("\nDhakah", "India"));           /// Output: dhakah, India
// console.log(city_country("\nwashington", "America"));     /// Output: washington, USA









////ex 40

// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title,
//   and it should return a Object containing these two pieces of information. 
//   Use the function to make three dictionaries representing different albums. 
//   Print each return value to show that Objects are storing the album information correctly. 
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//    Make at least one new function call that includes the number of tracks on an album.


// interface Album{
//     artist: string;
//     title: string;
//     tracks?: number;
// // }

// // function make_Album(artist: string, title: string, tracks?: number): Album {
// // //     let album: Album = {
// // //         artist: artist,
// // //         title: title
// // //     };

// // //     if (tracks !== undefined) {
// // //         album.tracks = tracks;
// // //     }

// // //     return album;
// // // }

// // // // Creating three albums without specifying the number of tracks
// // // interface Album {
// // //     artist: string;
// // //     title: string;
// // //     tracks?: number;
// // // }

// // // function make_album(artist: string, title: string, tracks?: number): Album {
// // //     let album: Album = {
// // //         artist: artist,
// // //         title: title
// // //     };

// // //     if (tracks !== undefined) {
// // //         album.tracks = tracks;
// // //     }

// // //     return album;
// // // }

// // // // Creating three albums without specifying the number of tracks
// // // let album1: Album = make_album("Ali Zafar", "Teefa in Trouble");
// // // let album2: Album = make_album("Atif Aslam", "Bol");
// // // let album3: Album = make_album("Abida Parveen", "Raqs-e-Bismil");

// // // console.log(album1);
// // // console.log(album2);
// // // console.log(album3);

// // // // Creating an album with the number of tracks specified
// // // let album4: Album = make_album("Nusrat Fateh Ali Khan", "Devotional and Love Songs", 10);
// // // console.log(album4);






// // ///ex 41

// // // Magicians: Make an array of magician’s names. 
// // // Pass the array to a function called show_magicians(), 
// // // which prints the name of each magician in the array.



// // function show_magicians(magicians: string[]): void {
// //     magicians.forEach((magicians , index) => {  ///arrow function
// //         console.log(`${index +1}. ${magicians}`); /// use of back ticks
// //     });
// // }
// // console.log("These are Pakistani Magicions!");
// // //// top 10 Pakistani magicians name in the array...
// // /// i search by google///

// // const pakistaniMagicians: string[] = ["M.Ejaz Mughal ", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani","Shamsher Razzaq ","Abid Khakwani ","Iqbal Hussain ","Shoukat Hameed","Asad","Daniyal Raffat"];

// // show_magicians(pakistaniMagicians);









// // //// ex 42

// // // Great Magicians: Start with a copy of your program from Exercise 39. 
// // // Write a function called make_great() that modifies 
// // // the array of magicians by adding the phrase the Great to each magician’s name. 
// // // Call show_magicians() to see that the list has actually been modified.




// // // function make_great(magicians: string[]): void {
// // //     magicians.forEach((magicians , index) => {
// // //         console.log(`${index +1}. ${magicians}`);
// // //     });
// // // }
// // // console.log("These are Pakistani Magicions!");
// // // const pakistaniMagicians: string[] = ["M.Ejaz Mughal ", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani","Shamsher Razzaq ","Abid Khakwani ","Iqbal Hussain ","Shoukat Hameed","Asad","Daniyal Raffat"];

// // // make_great(pakistaniMagicians);


// // // Define an array of magicians
// // let magicians: string[] = ["*M.Ejaz Mughal* ", "*M.Yaseen*", "*Mian Afzal Rashid*", "*AS Jillani*","*Shamsher Razzaq* ","*Abid Khakwani*","*Iqbal Hussain* ","*Shoukat Hameed*","*Asad*","*Daniyal Raffat*"];

// // // Function to modify the array of magicians by adding "the Great" to each magician's name
// // function make_great(magicians: string[]): string[] {
// //   return magicians.map(magician => `The Great  ${magician}`);
// // }

// // // Call makeGreat function to modify the magicians
// // magicians = make_great(magicians);

// // // Show the modified list of magicians
// // magicians.forEach(magician => console.log(magician));








// ////ex 43
// // Unchanged Magicians: Start with your work from Exercise 40.
// //  Call the function make_great() with a copy of the array of magicians’ names. 
// //  Because the original array will be unchanged, return the new array and store it in a separate array.
// //  Call show_magicians() with each array to show 
// //  that you have one array of the original names and one array with the Great added to each magician’s name.

// // Define the Magician class
// class Magician {
//     constructor(public name: string) { }

//     make_great(): void {
// //         this.name = `Great ${this.name}`; 
// //     }
// // }

// // // Function to make a copy of the array of magicians' names
// // function makeCopyOfMagicians(originalNames: string[]): Magician[] {
// //     const magicians: Magician[] = [];         //  Call the function make_great() with a copy of the array of magicians’ names. 
// //     for (const name of originalNames) {
// //         magicians.push(new Magician(name));
// //     }
// //     return magicians;
// // }

// // // Function to call make_great() on each magician in this array.
// // function make_great(magicians: Magician[]): void {
// //     for (const magician of magicians) {
// //         magician.make_great();
// //     }
// // }

// // // Function to show magicians' names
// // function showMagicians(magicians: Magician[]): void {
// //     for (const magician of magicians) {
// //         console.log(magician.name);
// //     }
// // }

// // // Original array of magicians' names
// // const originalNames: string[] = ["M.Ejaz Mughal ", "M.Yaseen", "Mian Afzal Rashid", "AS Jillani","Shamsher Razzaq ","Abid Khakwani ","Iqbal Hussain ","Shoukat Hameed","Asad","Daniyal Raffat"];

// // // Make a copy of the original array
// // const magiciansCopy: Magician[] = makeCopyOfMagicians(originalNames);

// // // Call makeGreat() with the copy of the array
// // make_great(magiciansCopy);

// // // Show original array of names
// // console.log("\tOriginal Magicians:\n");
// // showMagicians(magiciansCopy);

// // // Show array with "Great" added to each magician's name
// // console.log("\n\tCopy Great Magicians:\n");
// // showMagicians(magiciansCopy);







// // /////ex 44
// // // Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// // // The function should have one parameter that collects as many items as the function call provides, 
// // // and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// // // using a different number of argument...
// // // Define a function that accepts a variable number of string arguments
// // function orderSandwich(...items: string[]) {
// //     // Print a message indicating the start of the summary
// //     console.log("You ordered a sandwich with:");
    
// //     // Iterate over each item in the 'items' array
// //     items.forEach(item => {
// //         // Print each item with a bullet point
// //         console.log("- " + item);
// //     });
    
// //     // Print a message indicating the end of the summary
// //     console.log("Enjoy your sandwich!");
// // }

// // // Call the function with different number of arguments
// // orderSandwich("Ham", "Cheese", "Lettuce");
// // orderSandwich("Turkey", "Tomato", "Mayonnaise", "Pickles");
// // orderSandwich("Peanut Butter", "Jelly");









// // /////ex 45
// // // Cars: Write a function that stores information about a car in a Object. 
// // // The function should always receive a manufacturer and a model name. 
// // // It should then accept an arbitrary number of keyword arguments.
// // //  Call the function with the required information and two other name-value pairs,
// // //   such as a color or an optional feature.
// // //    Print the Object that’s returned to make sure all the information was stored correctly.
// function createCar(manufacturer: string, modelName: string, ...options: [string, any][]) {
//     // Create an object to store car information
//     let carInfo: any = {
//         manufacturer: manufacturer,
//         modelName: modelName
//     };

//     // Iterate over each pair of name-value options provided
//     options.forEach(option => {
//         const [key, value] = option;
//         carInfo[key] = value;
//     });

//     // Return the car information object
//     return carInfo;
// }

// // Call the function with required information and additional properties
// const car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

// // Print the object to check if the information was stored correctly
// console.log(car);
