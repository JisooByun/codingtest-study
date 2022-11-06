function solution(s) {
  arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  str = "";
  result = "";

  for (let i = 0; i < s.length; i++) {
    //not a number =>문자
    if (isNaN(s[i])) {
      str += s[i];
    } else {
      result += s[i];
    }
    for (let i = 0; i < arr.length; i++) {
      if (str === arr[i]) {
        result += i;
        str = "";
      }
    }
  }
  return Number(result);
}

/////좋은 풀이/////
function solution2(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
console.log(solution("one4seveneight"));
