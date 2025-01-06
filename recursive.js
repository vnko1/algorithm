function count(n, memo = {}) {
  if (n in memo) return memo[n];

  if (n <= 1) return n;

  const value = count(n - 1, memo) + count(n - 2, memo);
  memo[n] = value;
  return value;
}
console.log(count(50));
