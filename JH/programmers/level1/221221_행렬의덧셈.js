function solution(arr1, arr2) {
    var answer = [];
 
    for(let i = 0; i<arr1.length; i++){
        let sum = [];
         for(let j = 0; j<arr1[i].length; j++){ //arr1의 i번째 길이만큼 순회해야함
            sum.push(arr1[i][j] + arr2[i][j])
         }
       answer.push(sum)
        
    }
    return answer ;
}

//다른 코드
// function solution(A, B) {  
//     return A.map((a, i) => a.map((b, j) => b + B[i][j]));
// }
