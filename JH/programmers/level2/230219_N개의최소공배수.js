//최대공약수 구하기
const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

//최소공배수 구하기
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

//n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수
const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};

// https://github.com/jinaSE0/algorithm/commit/870a2fe0ef2a3286c88272e8619bf6d2f29ab118?short_path=0bf07a5#diff-0bf07a5938035a5964e07a645cc47e05119abf3e386b4868a78cbbf004363ab0
