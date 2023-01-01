function solution(s) {
  let stack = [];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    //stack.push(a)
    if (stack) {
      if (findstr(s[i]) === -1) {
        result.push(findstr(s[i]));
      } else {
        result.push(i - findstr(s[i]));
      }
    }
    stack.push(s[i]);
  }
  function findstr(str) {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === str) {
        return i;
      }
    }
    return -1;
  }
  return result;
}

console.log(solution("banana"));
