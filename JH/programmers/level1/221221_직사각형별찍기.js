-------------------------
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
 
    for(let i=0; i<b; i++){ 
        let str = "";    
        for(let j=0; j<a; j++){ 
            str = str + "*" 
        } 
    console.log(str) 
    }
});
//리턴을 하면 적어도 첫줄은 적혀야하지않나 왜 터지나...
//https://school.programmers.co.kr/learn/courses/30/lessons/12969
