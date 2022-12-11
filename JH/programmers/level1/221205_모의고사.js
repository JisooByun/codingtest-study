//반복되는 배열을 계속 돌리는 법을 모르겠어서 구글링함
// 이 문제의 키포인트는 포문을 돌릴때 존재하지 않는 인덱스넘버는 배열의 길이로 나눠서 
//그 배열의 요소 값들이 반복하게하는것
// 또 하나 더 배울 점은 스프레드문법을 사용해서 배열에서 최댓값을 찾는법
//Math.max(...배열)
function solution(answers) {
    const supo = [ 
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
                ];
    let score = [] //수포자들의 맞춘 수 배열
    let answer = [];
    //이중 포문을 answers.length까지 돌면서 인덱스값 매칭해서 같은거 있는만큼 셀까?
    //근데 그렇게 하면 다음 반복은 어떻게 매칭해?
    
    for(let i = 0; i<supo.length; i++){
        let result = 0; //정답수 초기화, 이것도 잘 활용하면 좋겠다 정희야..
        for(let j=0; j<answers.length; j++){
            // ex) [1,2,3,4,5] = 0~4번 인덱스의 값이 반복으로 들어가니
            // 5로 나눈 나머지 인덱스의 값을 계속 넣어주면 된다.
            supoAnswers = supo[i][j%supo[i].length];
            if (answers[j]===supoAnswers){
                result ++;
            }
        }
        score.push(result);
    }
    //score배열을 돌면서 최고점인 경우에 해당 인덱스+1을 answer배열에 넣는다
    for(let i = 0; i<score.length; i++){
        if(score[i]===Math.max(...score)){ //스프레드연산자써서 최댓값 구했구나
            answer.push(i+1);
        }
    }
    return answer
}
//1번 12345반복
//2번 21232425반복
//3번 3311224455반복
