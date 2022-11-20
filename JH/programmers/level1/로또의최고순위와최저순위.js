function solution(lottos, win_nums) {
    let answer = [];
    let cnt = 0;
    let cntZero = 0;
    let max = 0;
    let min = 0;
    
    //필터로 일치하는 값의 개수
    cnt = lottos.filter(x=>win_nums.includes(x))
    cnt = cnt.length
    //0의 개수
    cntZero = lottos.filter(el=>el===0)
    cntZero = cntZero.length
    
    //console.log(cnt, cntZero)
    
    max = cnt+cntZero
    min = cnt
    //console.log(7-max, 7-min)
    
    //max와 min을 순위로 바꾸려면? 7-max, 7-min
    //7에서 max와 min의 값을 빼면 됨
    
    //배열에push
    if(max===0){
        answer.push(6)
    }else{
        answer.push(7-max)
    }
    
     if(min===0){
        answer.push(6)
    }else{
        answer.push(7-min)
    }
    //위 식을 삼항 연산자로 구현하면
    //return[ max>1 ? 7-max :6 , min>1 ? 7-min : 6 ]
    return answer
}

//의사코드
//lottos의 배열을 순회하면서 당첨배열에 있는 수를 cnt저장, 0의개수 저장
//자바스크립트 두 배열 비교방법을 검색해봄 -> https://soft91.tistory.com/84
//lottos.filter(x=>win_nums.includes(x)) -> 교집합 배열로 출력 -> 이 길이가 일치넘버의수 

//최고 당첨 수 cnt+0개수 -> 순위로
//최저당첨수 cnt의 수를 -> 순위로
//배열에 넣어서 리턴
