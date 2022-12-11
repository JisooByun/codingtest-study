 function solution(N, stages) {
 //N은 전체 스테이지 개수
 //stages는 사용자가 멈춰있는 스테이지의 번호가 담긴 배열
     let temp = stages.length
     let obj = {}
 //각 단계 실패율의 분자는 그 단계에 있는 사람의 수
     for(let i = 1; i<=N; i++){
         let cnt = 0
         stages.filter((el)=>{
             if(el===i){
                 cnt ++; 
             }
         })
         obj[i]=cnt/temp
        //각 단계의 실패율의 분모는 1단계는 length만큼, 두번째는 length에서 그 전단계 분자를 빼고 계속 전단계 분자를 빼
        temp = temp - cnt
    }

      let arr = Object.entries(obj).sort((a, b)=>b[1]-a[1]) //객체의 키와 값을 다 도는데, 값을 기준으로 내림차순
      let result = []
      for(let i = 0; i<arr.length; i++ ){
          result.push(Number(arr[i][0]))
      }    
          return result
//실패율 크기를 비교해서 -> 그 단계를 내림차순으로 리턴

}

//잘짠 코드
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

