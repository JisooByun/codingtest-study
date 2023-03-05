function solution(citations) {
    citations.sort((a,b)=>b-a)
    let answers = 0;
    
        for (let i = 0; i < citations.length; i++) {
            if (i < citations[i]) {
                answers++;
            }
        }
        return answers;
}

//citations.lenth가 논문 수
//h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index
//나의 h는 어떻게 구할 수 있을까? 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 
//피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다.
//=> 자신의 인용횟수(cittations[i])가 자신보다 인용횟수가 많은 논문 수(i) 보다 많으면 정답 수를 1 증가시킨다.

//while문을 이용하면 배열을 끝까지 돌지 않음
// function solution(citations) {
//     citations = citations.sort((a, b) => b - a);
//     let i = 0;
//     while (i + 1 <= citations[i]) {
//         i++;
//     }
//     return i;
// } 
//https://laycoder.tistory.com/211

