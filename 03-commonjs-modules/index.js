const {
  myName,
  myHobbies,
  myFavoriteNumber,
} = require("./multiple-exports.js");
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require("./export-and-import.js");
const greetingFn = require("./my-modules/single-export.js");

console.log(myName); // Bogdan
myHobbies.push("cycling");
console.log(myHobbies); // [ 'swimming', 'reading', 'cooking' ]
console.log(myFavoriteNumber); // 77

greetingFn(myName); // Hello, Bogdan!
console.log(myFriendsName); // Alice
console.log(myOtherName); // Bogdan
console.log(myGreatHobbies); // [ 'swimming', 'reading', 'cooking' ]
