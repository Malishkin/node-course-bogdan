const myName = "Bogdan";
const myHobbies = ["swimming", "reading", "cooking"];
const myFavoriteNumber = 77;
console.log("Text from multiple-exports"); // Bogdan
// module.exports = { myName, myHobbies, myFavoriteNumber };
module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
