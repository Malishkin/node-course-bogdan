//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
setTimeout(() => {
  console.log("Timeout is done!");
}, 0);
function fib(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n);
    }
    return resolve(
      Promise.all([fib(n - 1), fib(n - 2)]).then((values) => {
        return values[0] + values[1];
      })
    );
  });
}

async function fibAsync(n) {
  return await fib(n);
}

fibAsync(9).then((result) => {
  console.log(result);
});
