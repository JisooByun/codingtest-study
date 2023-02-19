function solution(n)
{
    let ans = 0;
    //도착할지점이 0이 될때까지 진행
    while (n !== 0) {
        //홀수일때 무조건 한 번은 점프해야함
        if (n % 2 === 1) {
            ans++;
            n -= 1;
        } else {
            n /= 2;
        }
    }

    return ans;
}
//사용해야 하는 건전지 사용량의 최솟값을 return
