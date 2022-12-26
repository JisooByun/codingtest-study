function solution(arr) {
    if(arr.length <= 1) return [-1]
    let min = Math.min(...arr)
    const index = arr.indexOf(min)
    arr.splice(index, 1) //여기서 바로 리턴하면 삭제한 최솟값이 나옴
    return arr
}
