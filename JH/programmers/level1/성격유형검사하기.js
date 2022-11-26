function solution(survey, choices) {
   function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];
       
    //하나씩 끊어서 0 기초값 설정
    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )
    //survey랑  choice값 매칭 
    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];//destructuring-> an일때 disagree이면a agree일때n
        
        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);//초이스가5일경우n에1을더해서할당
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
}
//choices의 값이 3보다 크면 동의, 작으면 비동의라고 생각하고 풀이하면 쉬운 문제입니다.
//각 성격 유형 케이스를 만들어주고, 점수가 3보다 크면 비동의 캐릭터에 점수를 주고, 
//작을 시 동의  캐릭터에 점수를 줍니다. 모든 선택지에 점수를 부여한 후, 캐릭터에게 부여된 점수가 더 큰 캐릭터를 반환해줍니다.

