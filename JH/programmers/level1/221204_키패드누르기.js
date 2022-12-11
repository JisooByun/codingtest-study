//이건 모르겠어서 구글링한거 한 줄 한 줄 해석함

//못풀어서 구글링한거 한 줄 한 줄 해석함
function solution(numbers, hand) {
  const obj = { //객체안에 배열로 좌표를 표시함
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  //현재 손의 위치 저장   
  let left = "*"; 
  let right = "#"; 
    
  let result = "";
    
  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      result += "L";
      left = String(num); //객체키는 숫자로 보여도 문자거나 심볼이기때문, 현재 손위치 저장     
    } else if (num === 3 || num === 6 || num === 9) {
      result += "R";
      right = String(num);
    } else { //구조분해할당 L은 지금들어온 숫자num랑 현재왼손 위치와의 거리
      let [L, R] = getDistance(obj[left], obj[right], obj[num]);
      if (L < R) {
        result += "L";
        left = String(num); //다시 바뀐 손 저장
      } else if (R < L) {
        result += "R";
        right = String(num);
      } else { //같을때 
        if (hand === "right") {
          result += "R";
          right = String(num);
        } else {
          result += "L";
          left = String(num);
        }
      }
    }
  }
  return result;
}

//거리구하는 함수, 좌표와 피타고라스 정리 이용 curp는 현재 들어온 숫자
//왼손과 오른손 거리를 비교하는 거니까 굳이 루트나 제곱은 안했는데
//솔직히 이거 혼자풀때 생각못할듯
//lp는 현재 손의 위치 rp 는 현재 손의 위치
function getDistance(LP, RP, curP) {
  let fromL = Math.abs(curP[0] - LP[0]) + Math.abs(curP[1] - LP[1]);
  let fromR = Math.abs(curP[0] - RP[0]) + Math.abs(curP[1] - RP[1]);
  return [fromL, fromR];
}
