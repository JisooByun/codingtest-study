//세 개의 수를 더했을때 0이 되면 그 때 count + 1, 리턴값은 삼총사를 만들 수 있는 경우의 수
//처음 생각한 방식
//이중반복문을 쓰는데 0번째랑 1번째를 더하고나서 그 값에 - 붙인값이 남음 배열에 있으면 cnt+1
//일부만 통과되는데 ,,ㅜ
// function solution(number) {
//     let cnt = 0
//     let rev = 0
//     let revArr = []
//     for(let i=0; i<number.length-2; i++ ){
//         console.log("--")
//         for(let j =1; j<number.length-1; j++){
//            let rev = ((number[i]+number[j])*(-1)) 
//            console.log((number.slice(j+1)).includes(rev))
//            if(number.slice(j+1).includes(rev)){
//                cnt++           
//            }  
//         }     
//     }return cnt
// }
//글서 삼중 반복문썼다..ㅜ
function solution(number) {
    let answer = 0;
    
    for(let i = 0; i < number.length-2; i++) {
        for(let j = i+1; j < number.length-1; j++) {
            for(let k = j+1; k < number.length; k++) {
                if(number[i] + number[j] + number[k] === 0) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}

//다른 사람 풀이 https://velog.io/@le12352/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%82%BC%EC%B4%9D%EC%82%AC-JavaScript
// function solution(number) {
//     var answer = 0;
    
//     const combination = (current, start) => {
//         if (current.length === 3) {
//             answer += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
//             return;
//         }

//         for (let i = start; i < number.length; i++) {
//             combination([...current, number[i]], i + 1);
//         }
//     }
//     combination([], 0);
    
//     return answer;
// }
