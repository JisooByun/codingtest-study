function solution(n) {
   //약수는 어떻게 구하나? -> 어떠한 수로 나누었을때 나누어 떨어지는 경우
    //n 보다 작은 수로 하나씩 나눠서 나누어 떨어지는 수들을 더하면 되겠다
    //그러려면 나누는 수를 저장할 변수가 있어야겠네
    let idx = 1
    let sum = 0
    while(n>=idx){
        if(n%idx===0){
        sum += idx       
    }
        idx ++; //위치 이프문 밖에서 해야지.....
    }
    return sum    
}

//다른 사람 코드
//Math.sqrt를 사용하여 계산량을 절반으로 줄인 코드
// function solution(n) {
//     var answer = 0;
//     let i;
//     for (i = 1; i <= Math.sqrt(n); i++){
//         if (!(n%i)) {
//             answer += (i+n/i);
//         }
//     }
//     i--;
//     return (i === n/i) ? answer-i : answer;
// }
//계산량을 줄이기 위해 n까지 다 안하고, 아래 짝을 찾으면 위아래를 같이 더해봤습니다. 예를들어 12면, 3을 찾앗을때 3+4를 해주는 방식으로
