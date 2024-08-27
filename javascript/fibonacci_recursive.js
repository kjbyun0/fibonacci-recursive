
function fibonacci(n) {
  // type your code here
  if (n < 2)
    return n;

  return fibonacci(n-1) + fibonacci(n-2);
}

// const mem = [0, 1];
// function fibonacci(n) {
//   // type your code here
//   if (n < mem.length)
//     return mem[n];

//   mem[n] = fibonacci(n-2) + fibonacci(n-1);
//   return mem[n];
// }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
