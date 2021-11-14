function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const n = 5;
console.time("Execution time");
console.log(`Recursively Without memoization: The ${n}th Fibonacci number is ${fibonacci(n)}`);
console.timeEnd("Execution time");

var fibonacciMemo = (function () {
    const memo = {};
  
    function fibo(n) {
      let nthNum;
      if (n in memo) {
        nthNum = memo[n];
      } else {
        if (n === 0 || n === 1) nthNum = n;
        else nthNum = fibo(n - 1) + fibo(n - 2);
  
        memo[n] = nthNum;
      }
  
      return nthNum;
    }
  
    return fibo;
  })();
  console.time("Execution time");
  console.log(`Recursive With memoization: The ${n}th Fibonacci number is ${fibonacciMemo(n)}`);
  console.timeEnd("Execution time");