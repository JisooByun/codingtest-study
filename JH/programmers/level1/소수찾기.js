// function solution(n) {
// let arr = Array(n).fill().map((n,i)=>i+1);
//     //console.log(arr)
// let cnt = 0

// const isPrime = (n) => {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for(let el of arr){
//     if(isPrime(el)) cnt++
// }
//     return cnt-1 //1은소수가아니니까...
// }
//효율성테스트 ,,,,,,,,에서 망함...

//다른 사람 코드 => 에라토스테네스의 체 응용,,,,,,! 엄청 효율적
function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true); // 초깃값 설정
    const end = Math.sqrt(n) 
    
    //소수인지아닌지 배열에 넣어주는,,?
    for(let i = 2; i <= end; ++i){
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false){
            continue; 
        }
        // 소수가 아닌 데이터는 false로 입력한다.
        for(let k = i * 2; k <= n; k += i){
            arr[k] = false;
        }
    }
    // 소수의 갯수를 구한다.
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}
//https://velog.io/@goblin820/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-JavaScript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0
