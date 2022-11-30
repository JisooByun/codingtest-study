function solution(n) {
   
    let answer = 0;
    //3진법으로
    answer = n.toString(3)
   
    //앞뒤뒤집기
    answer = answer.split("").reverse().join("")
   
    //10진법으로
    answer = Number.parseInt(answer, 3); 
    
    return answer;
}


//진법변환하는법을 직접 구현해 볼  필요는 있을까?
