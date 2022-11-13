function solution(id_list, report, k) {
  let obj = {};

  //obj 초기화
  for (let a of id_list) {
    obj[a] = [];
  }
  //누가 누구 신고했는지 파악

  for (let i = 0; i < report.length; i++) {
    let reporter = report[i].split(" ")[0];
    let reported = report[i].split(" ")[1];

    obj[reporter] = [...obj[reporter], reported];
  }

  //정지당한 id 출력
  stoped = [];
  for (let a of id_list) {
    let cnt = 0;
    for (let key in obj) {
      if (obj[key].includes(a)) cnt += 1;
    }
    if (cnt >= k) {
      stoped.push(a);
    }
  }

  //통보 받는 개수 출력
  result = [];

  for (let a of id_list) {
    cnt = 0;
    for (let b of stoped) {
      if (obj[a].includes(b)) {
        cnt += 1;
      }
    }
    result.push(cnt);
  }
  return result;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
k = 2;

console.log(solution(id_list, report, k));
