function solution(board, moves) {
    let arr = [];   
    let cnt = 0
//이중포문으로 각 배열의 moves의 -1번째 인덱스를 도는데 
    for(let i=0; i<moves.length; i++){
        let location = moves[i]-1 //i에 대한 변수니까 여기서 선언
        for(let j=0; j<board.length; j++){       
            if(board[j][location]!==0){ //처음알았다
                //0이 아닌 수가 나오면 새 어레이에 넣고
                arr.push(board[j][location])
                // 그 자리에는 0을 넣어줌
                board[j][location]=0
                //새어레이에 같은 캐릭터넘버가 있으면 +2점하고 스택에서 두개빼고
                if(arr.length>=2){ //스택에 2개이상 있는지 먼저 확인
                if(arr[arr.length-1]===arr[arr.length-2]){
                    //스택에서 두개 빼고
                    arr.pop()
                    arr.pop()
                    cnt += 2
                }}
                break; //캐릭터가 있으면 더이상 탐색안해야
            }      
        }
    } return cnt
    


}
