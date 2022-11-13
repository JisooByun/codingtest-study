// function solution(id_list, report, k) {
//   var answer = [];
//   return answer;
// }
// 구하고 싶은 것
//유저별로 처리 결과 메일을 받은 횟수를 배열로
//매개변수는 아래와 같음
//이용자의 ID가 담긴 문자열 배열 id_list,
//각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report,
//정지 기준이 되는 신고 횟수 k
//리포트를 이용해서 띄어쓰기를 기준으로 각 인덱스를 나누고 짝수번째 있는것들을 세면 그게 신고당한 횟수 >=k이면 이용정지
//k 이상인 사람들을 신고한 사람들을에 횟수를 넘겨주면 되겠는데

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
//일단 홀수가 신고한사람 짝수가 신고당한 사람으로 배열을 만들자
let test = report.join().split(" ");
test = test.join().split(",");
//console.log(test);
//  [
//   'muzi',   'frodo',
//   'apeach', 'frodo',
//   'frodo',  'neo',
//   'muzi',   'neo',
//   'apeach', 'muzi'
// ] //홀수인덱스들이 신고당한 놈들임 횟수를 세어보자 -> for로 홀수인덱스만 돌고 reduce로 갯수를 세자
// for (let i = 0; i < test.length; i + 2) {
//   const counts = test.reduce((acc, current) => {
//     if (acc[current]) {
//       acc[current] += 1;
//     } else {
//       acc[current] = 1;
//     }
//     return acc;
//   }, {});
// }

const counts = test.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(counts); // 리듀스함수이용해서 푸는법 근데 홀수 인덱스만 어떻게 돌지?

//k번 이상인 사람들을 신고한 사람들이랑 매칭해서 비교한 후에

//배열로 메일 받은 횟수를 꺼내 보자
