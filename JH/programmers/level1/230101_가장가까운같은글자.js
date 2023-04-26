function solution(s) {
    let stack = [];
    let ans = [];
    
    for(let i = 0; i < s.length; i++){
        if(!stack.includes(s[i])){
            ans.push(-1);
            stack.push(s[i]);
            continue; 
            //continue문 아래에 있는 실행해야 하는 문장들을 건너 뛰고, 다음 반복을 시작한다. 
        }
        
        if(stack.includes(s[i])){
            ans.push(stack.length - stack.lastIndexOf(s[i]));
            //lastIndexOf : 주어진 값과 일치하는 부분을 fromIndex로부터 
            //역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다.
            stack.push(s[i]);
            continue;
        }
    }
    
    return ans;
}

//이렇게도 풀 수 있구나
// function solution(s) {
//     let stack = [];
//     let ans = [];
    
//     [...s].forEach((str) => {
//         if(!stack.includes(str)){
//             ans.push(-1);
//         }
              
//         if(stack.includes(str)){
//             ans.push(stack.length - stack.lastIndexOf(str));
//         }
                   
//         stack.push(str);
//     })
    
//     return ans;
// }
