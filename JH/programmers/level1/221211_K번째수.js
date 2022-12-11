function solution(array, commands) {
    let answer = [];
    //commands의 인덱스로 반복문 돌면서
    for(let i=0; i<commands.length; i++){
        //commands[0]-1부터 commands[1]까지 자르고 
        let list = array.slice(commands[i][0]-1, commands[i][1])
        //오름차순 sorting하고
        list.sort((a,b)=>{return a-b});
         //commands[2]의 수를 모아
        answer.push(list[commands[i][2]-1]);
    }

    return answer;
}

