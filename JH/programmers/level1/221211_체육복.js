//전체학생수 n 도난당한학생들의 번호가담긴배열 lost 여벌의 옷을 가져온학생들 reserve
//체육수업을 들을 수 있는 학생의 최댓값을 리턴
//애들은 세 부류로 나눠짐 : 빌려야하는애들 / 여분있는애들중 (도난당하지않은애들, 여분가져왔는데 잃어버린애들)
function solution(n, lost, reserve) {
    let answer = 0
  //IDEA1 필터 이용하기
//체육복입을 수 있는애들의 최댓값은 = 전체학생수n - 체육복이 없는애들
    
//체육복없는애들은 어떻게 구하나
//1. 빌려야할 애들을 필터링(lost에서 reserve에 없는 값 )
    const borrower = lost.sort((a,b)=>a-b).filter((el)=>!reserve.includes(el))
    
//2. 빌려줄 수 있고 안 잃어버린애들 필터링 
    let reserver = reserve.sort((a,b)=>a-b).filter((el)=>!lost.includes(el))
    
//3. 최종적으로 체육복없는애들은 borrower중 resever한테 빌릴 수 없는 애들만 필터링하면됨
     const finalLost = borrower.filter((lost) => {
        
        // 첫번째로 체육복을 빌려줄 수 있는 사람 
        const lend = reserver.find((reserve) => Math.abs(reserve - lost) == 1);
        
        // 체육복 빌려줄 사람이 없으면 그대로 lost 리턴
        if(!lend) return lost;
        
        // 빌려준 사람 제외하기
        reserver = reserver.filter((reverse) => reverse !== lend);
    
})
    
    // 답 = 전체 학생 수 - 체육복이 없는 학생 수 
    answer = n - finalLost.length;
    
    return answer;
}



//IDEA2 -> 버려...
//체육수업들을 수 있는 학생의 최댓값은
//일단 여벌의 옷을 가져온 애들(reserve.length) + 그 여벌의 옷을 빌릴 수 있는 애들 

//그 여벌의 옷을 빌릴 수 있는 애들은 어떻게 구하지?
//일단 빌려줄 수 있는애들(reserver)을 찾아야돼 -> reserve배열에서 lost 배열과 일치하지않는 애들을 필터로 reserver에 넣어
//그리고 reserver과 1차이나는 값들을 로스트와 비교해서 구해야돼 -> bollower
//방법은 lost에서 모두 -1 한 값과 reserve에서 같은 값이 있는지 찾고 -> bollower1
//reserve에서 bollower1에 있는 애들 빼고 남은 애들이랑 lost+1한 값이 같은 애들이 있는지 찾아 -> bollower2

//최댓값은 reserver.length + bollower1 + bollower2
