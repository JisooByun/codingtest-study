// //10 14 20 번 통과못함
// function solution(survey, choices) {
//   let indicates = [
//     { R: 0, T: 0 },
//     { C: 0, F: 0 },
//     { J: 0, M: 0 },
//     { A: 0, N: 0 },
//   ];

//   //recordIndicate(유형, 점수) 유형과 점수를 받아서 indicates를 기록함
//   function recordIndicate(indicate, score) {
//     for (let i = 0; i < indicates.length; i++) {
//       let [key1, key2] = Object.keys(indicates[i]);
//       if (key1 === indicate) {
//         indicates[i][key1] += score;
//       } else if (key2 === indicate) {
//         indicates[i][key2] += score;
//       }
//     }
//   }

//   for (let i = 0; i < survey.length; i++) {
//     //점수계산
//     let score = Math.abs(choices[i] - 4);
//     //첫번쨰꺼는 동의
//     let disagree = survey[i][0];
//     //두번째꺼는 비동의
//     let agree = survey[i][1];

//     if (choices[i] < 3) {
//       recordIndicate(disagree, score);
//     } else if (choices[i] === 3) {
//       continue;
//     } else if (choices[i] > 3) {
//       recordIndicate(agree, score);
//     }
//   }

//   // 최종 기록된 indicates를 가지고  성격유형을 출력
//   let result = "";
//   for (let i = 0; i < indicates.length; i++) {
//     let [key1, key2] = Object.keys(indicates[i]);
//     if (indicates[i][key1] >= indicates[i][key2]) {
//       result += key1;
//     } else {
//       result += key2;
//     }
//   }
//   return result;
// }

//통과한풀이
function solution2(survey, choices) {
  let indicates = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    let score = Math.abs(choices[i] - 4);
    let pointer;
    if (choices[i] < 4) {
      pointer = 0;
    } else {
      pointer = 1;
    }
    let key = survey[i][pointer];
    indicates[key] += score;
  }
  console.log(indicates);
  result = "";

  indicates["T"] > indicates["R"] ? (result += "T") : (result += "R");
  indicates["F"] > indicates["C"] ? (result += "F") : (result += "C");

  indicates["M"] > indicates["J"] ? (result += "M") : (result += "J");

  indicates["N"] > indicates["A"] ? (result += "N") : (result += "A");
  return result;
}

console.log(solution2(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
