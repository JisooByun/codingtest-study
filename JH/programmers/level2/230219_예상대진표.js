function solution(n,a,b)
{
    let cnt = 1;
    //a와 b가 맞붙게 되는 순간까지 라운드 진행
    while(Math.ceil(a/2)!==Math.ceil(b/2)){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
    }
    
    return cnt;
}
// 몇 번째 라운드에서 만나는지 return
