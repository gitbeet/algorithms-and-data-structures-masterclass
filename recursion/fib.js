// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));

// f(6) = f(5) + f(4) = f(4)+f(3)+f(3)+f(2) = f(3) + f(2) + f(2) + f(1) + f(2) + f(1) + f(2) =  f(2)+ f(1) + f(2) + f(2) + f(1) + f(2) + f(1) + f(2)
