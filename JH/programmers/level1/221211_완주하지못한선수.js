221211_완주하지못한선수.js
----


function solution(participant, completion) {
    var answer = '';
    //sort를 해야 배열 페어를 맞출수 있음
    completion.sort();
    participant.sort();
   
    //반복문을 돌려서 서로 다른값이 나올때 참가자를 확인, pa의 길이까지 하는 이유는 마지막에 완주못한 선수가 올 수 있기때문
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]){
             answer += participant[i]
            return answer;
          
        }
    } 
}
