//https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    let arr = String(n).split("")
    arr.sort((a,b)=> b-a)
    return parseInt(arr.join(""))
}
