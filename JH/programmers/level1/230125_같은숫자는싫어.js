function solution(arr){
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
           answer.push(arr[i]);
        }        
    }
    return answer;
}
//배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return

// function solution(arr){
//     return arr.filter((val,index) => val != arr[index+1]);
// }
