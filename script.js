// gn notes: start with const or let variable, only the later can be changed  then a name which is the variable identifier . assinnment operator is - and value is in ' ', the end of the statement is ; . go over functions and how to call them
// explain what an alert and a prompt is -- adding interaction to the page
// the concole.log() is a function to call. There will be many functions running in a website
function sayHello() {
    const name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website.");
}

sayHello();

// this function simulates a dice roll
// explain random values and how you can use them to create a game

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + dice + "!");
}

rollDice();

// use the same logic from the roll dice function to determine how many weeks it will take to 
// get your first developer job (completely random!)

function jobSearch() {
    let months = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    months += dice;
    alert("It will take you " + months + " months to get your first developer job!");
}

jobSearch();


// this function takes in your levels of comfort with HTML, CSS and JavaScript on a scale of 1-10 and returns 
// a motivational string depending on the average of the three numbers

function comfortLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        alert("You're already on your way to being a pro!");
    } else if (average >= 4) {
        alert("Don't worry, you'll get there! It just takes time and practice.");
    } else {
        alert("The only way to get better is to keep trying! You can do this!");
    }
}
comfortLevel(8, 9, 10);

// there are for and while loops. format for naming varaibles is lowerUpper eg myMovie is an object name used in session 4.
// used key values like dictionaries in python 
// return `${rating}/5` back tick is top left next to 1 key.

// Events, corner stone of front end
// they have a method, a name and a function. button and hover and so on
// DOM is a document object model. tree hierachy for website files
// ID can only be used once but can be used across html js and css
// elementc ca change all previous content through js. the method of a new elemeent is createElement
//47.44
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}