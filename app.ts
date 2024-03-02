//==================================Q2=====================================
//Question...Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//let prsonName = "Eric";
//console.log(`salam ${prsonName} /Would you like to learn some Python tdoay!`);

//===================================Q3====================================

//Question...Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
                            //toLowerCase
//let myName: string = "Hareem" 
//console.log(myName.toLocaleLowerCase());
                            //toUpperCase
//console.log(myName.toUpperCase());
                            //toTitleCase
//console.log(myName.replace(/\bw/g,c =>  c.toUpperCase()));


//==================================Q4=====================================
//Question...Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:

//let qoute: string="A person who made a mistake tried anything new.";
//let writer: string="Albert Einstein";
//console.log(`${writer} once said, "${qoute}"`);


//=================================Q5======================================
//Question...Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.

//let qoute: string="A person who made a mistake tried anything new.";
//let Famous_Person="Albert Einstein";
//let message=`${Famous_Person} once said, ${qoute}`;
//console.log(message);


//==================================Q6======================================
//Question...Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//let personName: string = `\n \t Zehra Scripter \t \n`;
//console.log(personName);
//let trim: string = personName.trim();
//console.log(trim);


//================================Q7-Q8=======================================
//Question.7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.
//Question.8.Yo should creat four lines that look like this (5+3) in console
//console.log(4+4);
//console.log(16-8);
//console.log(2*4);
//console.log(24/3);


//==================================Q9====================================
//Question...Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//let favNumber: number= 9;
//console.log(`'${favNumber}'is my favourite number!`);



//=================================Q10=====================================
//Question...Adding Comments: Choose two of the programs you’ve written, and
//add at least one comment to each. If you don’t have anything specific to 
//write because your programs are too simple at this point, just add your name 
//and the current date at the top of each program file.
//Then write one sentence describing what the program does.

//my name is zehra
//date is 22/2/2024
//this is a string in console
//console.log("salam everyone!");


//my name is zehra
//today is thursday
//this is multiplication in console
//console.log(10*11);


//===============================Q11=====================================
//Question...Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.

//let numbers: string[]= ['Saba','sana','hadi','rizwan','ali'];
//for(let i=0; i<numbers.length; i++){
//    console.log(numbers[i]);
//}


//===============================Q12=======================================
//Question...Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be 
//personalized with the person’s name.

//let names: string[]= ['saba','sana','sara','anam','hadi'];
//let message: string= 'Everyone is taking IT classes'
//for(let i=0; i<names.length; i++){
//    console.log(message,names[i])
//}


//===============================Q13========================================
//Question...Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”

//let transports : string[]=['car','buss','bike','pickup','highroof','ven'];
//for(let i=0; i<transports.length; i++){
//    console.log(`I would like to own a ${transports[i]}`);
//}


//==============================Q14=========================================
//Question...Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//let guestList: string[]= ['Hadiya','Baneen','Fizza','Ummu','Khaqan','Khizer'];
//for(let i=0; i<guestList.length; i++){
//    console.log(`My dear guest ${guestList[i]}
//    you are invited todays dinner at our place`);
//}



//==============================Q15=========================================
//Question...Changing Guest List: You just heard that one of your guests can’t 
//make the dinner, so you need to send out a new set of invitations. You’ll 
//have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end 
//of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with 
//the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still 
//in your list.

//let guestList : string [] = ['shahid','ali','asad','ahsan','rashid','sana'];
//for(let i=0; i<guestList.length; i++){
//    console.log(`Dear ${guestList[i]} today you are invited on dinner at my place
//    Thanks`);
//}
//let notComingPerson = 'shahid';
//let newGuest = 'hadi';
//console.log(`Sad news...
//${notComingPerson} is not comming for todays dinner!
//Good news...
//${newGuest} is comming to join all of us`)
//guestList[0] = newGuest;
//for (let i=0; i<guestList.length; i++){
//    console.log(`Dear ${guestList[i]} today you are invited on dinner at my place
//   Thanks`);
//}


//=================================Q16=======================================
//Question...More Guests: You just found a bigger dinner table, so now more 
//space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the 
//end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one 
//new guest to the end of your list. • Print a new set of invitation messages, 
//one for each person in your list.


//let guestList: string[] =['hadi','ali','asad','ahsan','rashid','sana'];
//for(let i=0; i<guestList.length; i++){
//        console.log(`${guestList[i]} is invited for dinner
//`);
//}
//console.log(`Here is a good news.. we can add 3 more person for dinner table!`)

//let sammar =guestList.unshift('sammar');
//let bano =guestList.splice(4,0,'bano');
//let saima =guestList.push('saima');
//let newGuestList = guestList;
//for(let i=0; i<newGuestList.length; i++){
//     console.log(`Now ${newGuestList[i]} is invited for dinner table
//`);
//}



//===============================Q17=====================================
//Question...Shrinking Guest List: You just found out that your new dinner table 
//won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a 
//message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in 
//your list. Each time you pop a name from your list, print a message to that 
//person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them 
//know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print 
//your list to make sure you actually have an empty list at the end of your program

//let guestList = ['hadi','ali','asad','ahsan','rashid'];
//console.log(`Bad news!! 
//big table is unavaiabe write now thats why your invitation is cancel`);
//while(guestList.length>2){
//        let RemoveGuest = guestList.pop();
//        console.log(`Sorry ${RemoveGuest} your invitation is cancel`);
//}
//for(let i=0; i<guestList.length; i++){
//        console.log(`Now ${guestList[i]} is invited for dinner `);
//}


//===============================Q18=======================================
//Question...Seeing the World: Think of at least five places in the world you’d 
//like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical 
//order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order 
//of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has 
//changed.
//• Reverse the order of your list again. Print the list to show it’s back to 
//its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to 
//show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed

//var wantToVisit = [' Makkah ',' Sham ',' Turky ',' Dubai ', ' Australlia '];
//console.log(`Original order: ${wantToVisit}`);
//console.log("Alphabetical order: " + [...wantToVisit].sort());
//console.log(`Original order: ${wantToVisit}`);
//console.log("Reverse alphabetical order: " + [...wantToVisit].sort().reverse());
//console.log(`Original order ${wantToVisit}`);
//console.log("Alphabetical order: " + [...wantToVisit].sort());
//console.log("Reverse alphabetical order:" + [...wantToVisit].sort().reverse());


//=====================================Q19=========================================
//Question...Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
//a message indicating the number of people you are inviting to dinner.

//let guestList: string[]= ['Hadiya','Baneen','Fizza','Ummu','Khaqan','Khizer'];
//for(let i=0; i<guestList.length; i++){
//    console.log(`My dear guest ${guestList[i]}
//    you are invited todays dinner at our place`);
//}
//console.log(`Number of guests we are invited`);
//console.log(`we invited ${guestList.length} Guests finaly`);


//=====================================Q20==============================================
//Question...Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//var cities : string[] = [' Karachi ',' Hyderabad ',' Sakkhar ',' Nawabsha ',' Islamabad ',' Murry '];
//console.log(`cities in pakistan`);
//for(let fav of cities){
//    console.log(fav)
//}


//=====================================Q21================================================
//Question...They think of something you could store in a TypeScript Object. Write a program 
//that creates Objects containing these items


//interface item {
//    name:string
//    price:number
//}
//var book: item ={
//    name:'typescript',
//    price: 200
//}
//var fruits: item = {
//    name:'cherry',
//    price:400
//}
//console.log(`book name: ${book.name}, price: $${book.price}`);
//console.log(`Fruits ${fruits.name}, price $${fruits.price}`);



//==================================Q22=========================================

//Question...Intentional Error: If you haven’t received an array index error in one of your 
//programs yet, try to make one happen. Change an index in one of your programs 
//to produce an index error. Make sure you correct the error before closing the program.

//var error = ['55','88','hadi'];
//console.log(`Intentional Error ${error[9]}`)
//console.log(`correction ${error[2]}`);


//====================================Q23==================================================
//Question...Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
//prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// 1.
//var mayHouseColor = "White";
//console.log("is house color == 'White'? I guess true. ");
//console.log(mayHouseColor=="White");
// 2.
//var picture = 'Beautiful';
//console.log("Is picture == 'beautiful'? I guess true. ");
//console.log(picture=='Beautiful');
// 3.
// var myHouseColor = 'white';
// var myBag = 'beautiful';
// var flag = 'soft';
// var laptop = 'big';
// var apple = 'red';
// var arry =  [1,2,3,4,5];
// var door = 'iron';
// var shelf = 'wooden';
// var course = 'typescript';
// var students = 'intelligent';
// // 1.
// console.log('Is My House Colour==="white"? I guess its true');
// console.log(myHouseColor==='white');
// // 2.
// console.log('Is My Bag==="Beautiful"? I guess its false');
// console.log(myBag==='unique');
// // 3.
// console.log('Is Flag===soft? I guess its true');
// console.log(flag==="soft");
// // 4.
// console.log('Is laptop===big? I guess its false');
// console.log(laptop==="small");
// // 5.
// console.log('Is apple===red? I guess its true');
// console.log(apple==='red');
// // 6.
// console.log('Is arry===4? I guess its false');
// console.log(arry.length===9);
// // 7.
// console.log('Is door===iron? I guess its true');
// console.log(door==='iron');
// // 8.
// console.log('Is shelf===wooden? I guess its false');
// console.log(shelf==='plastic');
// // 9.
// console.log('The students===intelligent? I guess its true');
// console.log(students==='intelligent');
// // 10.
// console.log('The course===typescript? I guess its false');
// console.log(course==='web3');


//===============================Q24=====================================
//Question...More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
//try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

// var myPession = 'Scripting';
//     //equality test
// console.log(myPession==='Scripting');
//     //inequality test
// console.log(myPession!=='Scripting');
//     //lowercase test
// console.log(myPession==='scripting');
//     //numerical test
// var number = 9;
//     //equality test of number
// console.log(number===9);
//     //unequality test
// console.log(number!==9);
//     //greater then
// console.log(number > 7);
//     //less then
// console.log(number < 8);
//     //less then or equals to
// console.log(number >= 5);
//     //greater then or equals to
// console.log(number <= 5);

       //and &&       ,        or ||
//var x = 10;
//var y = 20;
//console.log(x !== 10 && y === 20);
//console.log(x !== 10 || y === 20);

       //test items are in array and items are not in array
//var array = ['zehra',1,2,3,4,5,];
//var string = 'sara';
//console.log(Array.isArray(array));
//console.log(Array.isArray(string));


//==================================Q25======================================
//Question...Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color 
//and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
//just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails 
//will have no output.

// var alionColor = 'red';
// if (alionColor==="red"){
//     console.log(`Player just earned 5 points.`);
// }
//     //no out put
// alionColor = 'green';
// if (alionColor==='yellow'){
//        console.log('Player just earned 5 points.');
// }    



//======================================Q26=====================================
//Question...Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

//let alienColor = "green";
//if(alienColor==="green"){
//       console.log("The player just earn 5 points for the shooting the alien");
//}else if(alienColor!=="green"){
//       console.log("The player just earned 10 points");
//}



//=======================================Q27=====================================
//Questions...Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

// var alienColor = 'green';
// if(alienColor==='green'){
//        console.log('The player earned 5 points.');
// }else if(alienColor==='yellow'){
//        console.log('The plear earned 10 points');
// }else if(alienColor==='red'){
//        console.log('The plear earned 15 points');
// }


//===================================Q28=========================================
//Question...Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for 
//the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.


// let age = 22;
// if(age<2){
//        console.log("The person is a 'Baby'");
// }else if(age >=2 && age <4){
//        console.log("The person is 'Toddler'");
// }else if(age >=4 && age <13){
//        console.log("The person is 'Kid'");
// }else if(age >=13 && age <20){
//        console.log("The person is 'Adult'");
// }else if(age>=65){
//        console.log("The person is 'Elder'");
// }



//=======================================Q29==============================
//Question...Favorite Fruit: Make a array of your favorite fruits, and then write a series 
//of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// let myFavFruit = ['peach','cherry','strawberry'];
// if(myFavFruit.includes('peach')){
//        console.log("You really like 'Peach'");
// }
// if(myFavFruit.includes('cherry')){
//        console.log("You really like 'Cherries'");
// }
// if(myFavFruit.includes('strawberry')){
//        console.log("You really like 'Strawberries'");
// }
// if(myFavFruit.includes('mango')){
//        console.log("You really like 'Mangoes'");
// }
// if(myFavFruit.includes('pear')){
//        console.log("You really like 'Pears'");
// }



//======================================Q30=========================================
//Question...Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// let listOfNames = ['admin','ali','saba','sara','asma','baber','shahid'];
// for(let names of listOfNames){
//        if (names==='admin'){
//               console.log("Hello Admin! would you like to see a status report?");
//        }else{
//               console.log(`Hello ${names}! Thank you for logging in again`);
//        }
// }



//======================================Q31==========================================
//Question...No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is print.

//let listOfUsers = [];
//console.log("We need to find some users");



//=========================================Q32=========================================
//Question...Checking Usernames: Do the following to create a program that simulates how websites ensure 
//that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print 
//a message that the person will need to enter a new username. If a username has not been used, print a 
//message saying that the username is available
//. Make sure your comparison is case insensitive. if 'johan' has been used, 'JOHAN' should not be accepted.

// let currentUsers = ['ali','adil','asif','arif','arshad','moon'];
// let newUsers = ['Ali','adil','wajji','qamar','ameer','fahad'];
// let current_users_lower = currentUsers.map(user => user.toLowerCase());

// for (let new_user of newUsers) {

//     let new_user_lower = new_user.toLowerCase();
    
//     if (current_users_lower.includes(new_user_lower)) {
//         console.log(`The username ${new_user}  is not available. Please enter a new username.`);
//     } else {
//         console.log(`The username ${new_user}  is available.`);
//     }
// }


//=====================================Q33===========================================
//Question...Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 
//1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     let ordinal: string;
//     if (numbers[i] === 1) {
//         ordinal = "st";
//     } else if (numbers[i] === 2) {
//         ordinal = "nd";
//     } else if (numbers[i] === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     console.log(`${numbers[i]}${ordinal}`);
// }



//====================================Q34=============================================
//Question...Pizzas: Think of at least three kinds of your favorite pizza. Store these 
//pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing 
//just the name of the pizza. For each pizza you should have one line of output containing a 
//simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional 
//sentence, such as I really love pizza!


// let favoritePizzas: string[] = ["tikka", "chicken fajita", "BBQ Chicken"];

// console.log("Pizza Names:");
// for (let pizza of favoritePizzas) {
//     console.log(pizza);
// }

// console.log("Statements about each pizza:");
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// console.log("I really love pizzas!");



//=========================================Q35======================================
//Question...Animals: Think of at least three different animals that have a common 
//characteristic. Store the names of these animals in a list, and then use a for loop to print out 
//the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these 
//animals have in common. You could print a sentence such as Any of these animals would make a great pet

// let animals = ["Dog", "Cat", "monkey"];

// console.log("Animal Names:");
// for (let animal of animals) {
//     console.log(animal);
// }
// console.log("Statements about each animal");
// for (let animal of animals) {
//     console.log("A " + animal + " would make a great pet.");
// }

// console.log("\nAll of these animals would make a great pet!");



//=========================================Q36======================================
//Question...T-Shirt: Write a function called make_shirt() that accepts a size and 
//the text of a message that should be printed on the shirt. The function should print 
//a sentence summarizing the size of the shirt and the message printed on it. Call the function

// function makeShirt(size: string, message: string): void {
//        console.log(`Size: ${size}, Message: ${message}`);
//    }
//    makeShirt("XL", "Scripter!");


//========================================Q37=====================================
//Question...Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
//message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message

// function makeShirt(size = "Large", message = "I love TypeScript"): void {
//        console.log(`Size: ${size}, Message: ${message}`);
//    }
   
//    makeShirt();
   
//    makeShirt("Medium");
   
//    makeShirt("Small", "TypeScript is awesome!");


//=========================================Q38===========================================
//Question...Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country 
//a default value. Call your function for three different cities, at least one of which is not in the default country

// function cities(city: string, country: string = "Unknown"): void {
//        console.log(`${city} is in ${country}.`);
//    }
//    cities("Karachi", "Pakistan");
//    cities("Mashad", "Iran");
//    cities("Dubai");



//===========================================Q39=================================================
//Question...City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

// function city_country(city: string, country: string): string {
//        return `${city}, ${country}`;
//    }
   
//    console.log(city_country("Karachi", "Pakistan"));
//    console.log(city_country("Mumbai", "India"));
//    console.log(city_country("Melburn", "Australia"));



//=======================================Q40===========================================================
//Question...Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing 
//these two pieces of information. Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. Add an optional 
//parameter to make_album() that allows you to store the number of tracks on an album. If the calling line 
//includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function 
//call that includes the number of tracks on an album

// interface Album {
//        artist: string;
//        title: string;
//        tracks?: number;
//    }
   
//    function make_album(artist: string, title: string, tracks?: number): Album {
//        let album: Album = {
//            artist: artist,
//            title: title
//        };
   
//        if (tracks) {
//            album.tracks = tracks;
//        }
   
//        return album;
//    }
   
//    let album1 = make_album("Artist1", "Album1");
//    let album2 = make_album("Artist2", "Album2", 12);
//    let album3 = make_album("Artist3", "Album3");
   
//    console.log(album1);
//    console.log(album2);
//    console.log(album3);



//===========================================Q41===============================================
//Question...Magicians: Make a array of magician’s names. Pass the array to a function called 
//showMagicians(), which prints the name of each magician in the array

// function showMagicians(magicians: string[]): void {
//        magicians.forEach(magician => {
//            console.log(magician);
//        });
//    }
   
//    let magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn & Teller"];
//    showMagicians(magicians);



//=============================================Q42========================================
//Question...Great Magicians: Start with a copy of your program from Exercise 39. Write a 
//function called make_great() that modifies the array of magicians by adding the phrase the Great 
//to each magician’s name. Call show_magicians() to see that the list has actually been modified

// function show_magicians(magicians: string[]): void {
//        magicians.forEach(magician => {
//            console.log(magician);
//        });
//    }
   
//    function make_great(magicians: string[]): string[] {
//        for (let i = 0; i < magicians.length; i++) {
//            magicians[i] = "the Great " + magicians[i];
//        }
//        return magicians;
//    }
   
//    let magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn & Teller"];
   
//    show_magicians(magicians);
   
//    magicians = make_great(magicians);
   
//    console.log("\nAfter modification:");
//    show_magicians(magicians);



//===========================================Q43===========================================
//Question...Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with 
//a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array 
//and store it in a separate array. Call show_magicians() with each array to show that you have one array of 
//the original names and one array with the Great added to each magician’s name.

// function showMagicians(magicians){
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function makeGreat(magicians){
//     let greatMagicians =[];
//     for (let i=0; i<magicians.length; i++){
//         greatMagicians.push("The great "+magicians[i]);
//     }
//     return greatMagicians;
// }
// let magiciansNames=["David Copperfield","Harry Houdini","Penn Jillete","Teller"];
// let greatMagicians=makeGreat([...magiciansNames]);
// console.log("                Orignal Magicians:");
// showMagicians(magiciansNames);
// console.log("                Great Magicians:");
// showMagicians(greatMagicians)





//================================================Q44=============================================
//Question...Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time

// function makeSandwich(...items: string[]): void {
//        console.log("Making a sandwich with the following items:");
//        items.forEach(item => {
//            console.log("- " + item);
//        });
//        manufacturer: manufacturer,
//            model: model
//        };
   
//        options.forEach(option => {
//            car[option[0]] = option[1];
//        });
   
//        return car;
//    }
   
//    let myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
   
//    console.log(myCar);
//        console.log("Enjoy your sandwich!\n");
//    }
   
//    makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
//    makeSandwich("Turkey", "Swiss cheese", "Avocado");
//    makeSandwich("Peanut butter", "Jelly")



//==============================================Q45==========================================
//Question...Cars: Write a function that stores information about a car in a Object. The function should always 
//receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call 
//the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly

// function carInfo(manufacturer,model, ...arbitrary){
//         let carObject = {
//             manufacturer: manufacturer,
//             model: model
//         };
//         for (let i = 0; i < arbitrary.length; i += 2) {
//             let key = arbitrary[i];
//             let value = arbitrary[i + 1];
//             carObject[key] = value;
//         }
    
//         return carObject;
//     }
//     let myCar = carInfo('Toyota', 'Camry', 'color', 'black', 'year', 2020);
//     console.log(myCar);
