function solution(n, m) {
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

function gcd(a, b) {
  let c = 0;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}
