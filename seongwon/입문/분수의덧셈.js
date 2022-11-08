function solution(denum1, num1, denum2, num2) {
  let num = num1 * num2;
  let denum = num1 * denum2 + num2 * denum1;

  //num과 denum의 최소공배수를 구한다.
  //유클리드호재법
  let r = 0;
  let a = num;
  let b = denum;
  a = num;
  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return [denum / a, num / a];
}
