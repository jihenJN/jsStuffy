// let Keyword
let name = "JIHENE";
console.log(name[name.length - 1]);
let email = "jihen@gmail.com";
let age = 32;
age = age + 1;
console.log(age);

const points = 100;

// app.js:11 Uncaught TypeError: Assignment to constant variable
//points =102
//console.log(points)

// currency converter $AUD to $USD

let USD = 1200;
let AUD = USD * 1.5;
console.log(USD + "USD = " + AUD + "AUD");

let comparison = "4" === 4;
console.log(comparison);

let userMembership = true;
let loggedIn = true;

let showVideo = userMembership && loggedIn ? "show video" : "dont show video";

console.log(showVideo);
// if (userMembership === true) {
//   console.log("show the video");
// } else if (loggedIn === true) {
//   console.log("tell user to upgrade");
// } else {
//   console.log("tell user to login");
// }

let Age = 14;
let hasId = true;
Age >= 18 && hasId ? console.log("you can enter") : console.log("Get out");

// if (Age > 18 && hasId == true) {
//   console.log(`your age is  ${Age} you can enter the bar`);
// } else if (Age == 18 && hasId == true) {
//   console.log(`you just turned ${Age} you can enter the bar`);
// } else {
//   console.log(`your age is   ${Age} get out of`);
// }

let hasCourage = true;
hasCourage ? console.log("you are doer") : console.log("you are talker");

let counter = 1;
while (counter <= 5) {
  counter = counter + 1;
  console.log(counter);
}

console.log("the loop is finished");

for (let i = 1; i <= 15; i++) {
  let msg = "";
  if (i % 5 === 0) {
    msg = `${i} - " ASAP FRONTEND"`;
  } else {
    msg = i % 2 === 0 ? `${i} - "FRONTEND"` : `${i} - "ASAP"`;
  }
  console.log(msg);
}

let string = "ASAP FRONTEND";

console.log(string.length);

for (i = 0; i < string.length; i++) {
  console.log(`"${string[i]}"`);
}

function greetUser(name, time) {
  console.log(`good ${time}, ${name}`);
}

greetUser("hisoka", "evening");

function main() {
  return "stupida";
}
console.log(main());

//regular function
// function convertUsdToAud(usd){
//   return (usd * 1.5)

// }

const convertUsdToAud = (dollars) => {
  return dollars * 1.5;
};
console.log(convertUsdToAud(1000));

let array = ["apples", "oranges", "kiwi"];

//target the first element
console.log(array[0]);

//target the last element
console.log(array[array.length - 1]);

//mutated method
array.push("bob");

console.log(array);

//non-mutated method
//["apples","oranges","kiwi","bob"]
let fitredArray = array.filter((element) => {
  console.log(element);
  return true;
});

console.log(fitredArray);

let prices = [10, 25, 30, 60, 15];

let filtredPrices = prices.filter((element) => element > 15);

console.log(prices);
console.log(filtredPrices);

let poeple = [12, 15, 18, 11, 30, 25];

let adults = poeple.filter((element) => element >= 18);

console.log(adults);

//loop through array
let ages = [];
for (i = 0; i < poeple.length; i++) {
  if (poeple[i] >= 18) {
    console.log(`  ${i} => ${poeple[i]}`);
    ages.push(poeple[i]);
  }
}

console.log(ages);

let test = [1, 2, 3, 4];

let testFiltred = test.filter((element) => {
  return 1;
});

let testMaped = test.map((element) => {
  return true;
});

console.log(testFiltred);
console.log(testMaped);

let usDollars = [12, 20, 15, 25];
// let auDollars = usDollars.map(element=>element * 1.5)

let auDollars = [];
for (i = 0; i < usDollars.length; i++) {
  auDollars.push(usDollars[i] * 1.5);
}

console.log(usDollars);
console.log(auDollars);

// objects
let user = {
  email: "alexa@gmail.com",
  password: "test12345",
  name: "alexa",
  discord: "alexaDiscord",
  subscription: "VIP+",
  lessonsCompleted: [1, 2, 3],
};

console.log(user);
console.log(user.email);

let users = [
  {
    email: "alexa@gmail.com",
    password: "test12345",
    name: "alexa",
    discord: "alexaDiscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  },
  {
    email: "amen@gmail.com",
    password: "test66",
    name: "amen",
    discord: "amenDiscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3, 4, 5],
  },
];

console.log(users);
console.log(users[1].email);
console.log(users[0].lessonsCompleted.map((element) => element * 3));

let userr = {
  email: "alexa@gmail.com",
  password: "test12345",
  name: "alexa",
  discord: "alexaDiscord",
  subscription: "VIP+",
  lessonsCompleted: [1, 2, 3],
};


let persons = [];
function createUser(email, name, lessons) {
  let person = {
   email:email,
   name:name,
   lessons:lessons
  };
 persons.push(person);
 
}
createUser("jihen@gmail.com", "jihen", [1, 2, 3, 4]);
createUser("amin@gmail.com", "amin", [1, 2]);
console.log(persons);
