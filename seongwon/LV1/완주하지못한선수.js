function solution(participant, complete) {
  let map = new Map();
  for (let a of participant) {
    if (!map.get(a)) {
      map.set(a, 1);
    } else {
      map.set(a, map.get(a) + 1);
    }
  }
  for (let a of complete) {
    if (map.get(a)) {
      map.set(a, map.get(a) - 1);
    }
  }
  let result = "";
  for (let [k, v] of map) {
    if (v === 1) {
      result = k;
      break;
    }
  }
  return result;
}
// function solution(participant, completion) {
//     for(let i=0;i<completion.length;i++){
//         for(let j=0;j<participant.length;j++){
//             if(completion[i]===participant[j]){
//                 participant[j]=0
//                 break
//               }
//         }
//     }
//     for(let a of participant){
//         if(a!==0){
//             return a
//         }
//     }

// }
