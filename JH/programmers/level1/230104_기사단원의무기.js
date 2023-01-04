//https://school.programmers.co.kr/learn/courses/30/lessons/136798
//수도코드 만들고 코드 짜다가 스터디전까지 시간없어서 구글링해서 봄 ㅠㅠ 나중에 다시 풀기
//https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv1-%EA%B8%B0%EC%82%AC%EB%8B%A8%EC%9B%90%EC%9D%98-%EB%AC%B4%EA%B8%B0

function solution(number, limit, power) {
    var answer = 0;
  
    // 1) numbers이하의 자연수만 존재하기 때문에 numbers+1만큼 배열 생성
    const numsArr = new Array(number+1).fill(0);

    /*
      2) 약수의 개수를 한번에 count하는 반복문
    	 인덱스 번호를 자연수로 정하고, 해당 자연수에 대한 약수를 
         반복문을 통해 하나씩 증가시킨다.
    */
    for(let i = 1;i<=number;i++) {
        for(let j = i;j<=number;j += i) {
            numsArr[j] += 1;
        }
    }

    // 3) cv(현재 값)이 limit 값보다 크면 pv(누적 값)에 power만큼 더하고, 작으면 cv만큼 더한다
    return numsArr.reduce((pv,cv) => { return cv > limit ? pv+power : pv+cv }, 0);
}

//num은 각 기사들의 번호
//기사번호의 약수'개수'에 해당하는 공격력에 해당하는 무기
//만약에 lim이 있다면 power에 해당하는걸 구매해야
//공격력과 필요한 철의 무게는 같음 -> 리턴값
// 약수 개수 어레이를 구한다(이때반절만 돌고 +1하면 된다)
// 약수어레이에 리미트 값이 넘는다면 -> 파워를 넣어줌
// 안넘는다면 원래값그대로 바꿈
// 다 합친다
