function solution(n) {
    let answer = 0
    let sqrt = Math.sqrt(n)
    if(sqrt%1 !== 0){
        answer = -1
    }else{
        answer = (sqrt+1)**2
    }
    return answer
}
