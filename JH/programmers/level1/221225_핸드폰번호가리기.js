function solution(phone_number) {
    return Array(phone_number.slice(0, -4).length).fill("*").join("") + phone_number.slice(-4)    
}

//다른사람코드

//1. repeat를 생각을 못했다
// function hide_numbers(s){
//   var result = "*".repeat(s.length - 4) + s.slice(-4);
//   return result;
// }

//2. 내코드보다 더짧다...fill을이런식으로 쓸 수 있구나
//const solution = n => [...n].fill("*",0,n.length-4).join("")
