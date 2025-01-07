// function memoizedCount(n, memo = {}) {
//   if (n in memo) return memo[n];

//   if (n <= 1) return n;

//   const value = count(n - 1, memo) + count(n - 2, memo);
//   memo[n] = value;
//   return value;
// }
// console.log(memoizedCount(50));

// function count(n) {
//   if (n <= 1) return n;

//   return count(n - 1, memo) + count(n - 2, memo);
// }
// console.log(count(50));
