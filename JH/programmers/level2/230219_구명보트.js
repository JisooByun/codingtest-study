function solution(people, limit){
	var answer = 0
    //내림차순으로 정렬
    people.sort((a,b) => b-a)
    //앞쪽 사람 인덱스
    let l = 0
    //뒷쪽 사람 인덱스
    let r = people.length-1
    
    while(l<r){
    	var sum = people[l] + people[r]
        if(sum>limit){ //혼자타게 되는 사람
        	l++
        } else { //앞 뒤 사람이 같이 타게 됨
        	l++
            r--
        }
        answer++
    }
    //계산되지않은 사람이 하나 남았다면 혼자탈거니까 +1
    if(l == r) answer++
    return answer
}
// 리턴 : 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값 
