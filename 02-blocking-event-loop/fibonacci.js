//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
setTimeout(() => {
  console.log("Timeout is done!");
}, 0);
function fib(n) {
  // n = это индекс числа Фибоначчи
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(11)); // считаем от нуля, то есть это 10-е число Фибоначчи
