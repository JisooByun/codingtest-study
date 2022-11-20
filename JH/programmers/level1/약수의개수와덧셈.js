function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }

    if (count % 2 === 0) {
      result += i;
    } else if(count%2===1){
      result -= i;
    }
  }
  return result;
}

//left부터 right까지 i가 레프트와 라이트 사이의 수이고 j가 그보다 작은 값
// let count = 0
// for(let i= left; i<=right; i++){
//     for(let j = 0; j<= i; j++ ){
//         if(i>j&&i%j===0){
//             count += 1
//         }
//              j += 1
//     }
//     return i
// }

//약수의 개수를 구하는 방법
// let index = 1
// let count = 0
// while(num>=index){
//     if(num%index===0){
//     count +=1
// }
//      index +=1
// }
