import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
import DEFAULT_SERVER, {
  USERNAME as MY_USERNAME,
  PASSWORD as MY_PASSWORD,
} from "./mixed-exports.mjs";
import getDatafromServer from "./default-export.mjs";

console.log(season); // spring
console.log(temperature); // 13
console.log(isRaining); // false
console.log(humidity); // 40

getDatafromServer("https://jsonplaceholder.typicode.com/posts/1")
  .then((post) => {
    console.log(post);
  })
  .catch((error) => {
    console.error(error);
  });

console.log(DEFAULT_SERVER); // http://localhost
console.log(MY_USERNAME, MY_PASSWORD); // admin strong-password
