function solution(s) {
    answer = 0;
    //배열을 만들고 인덱스 값이랑 매칭되게 만듦
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    //반복문을 돌면서 s에 numbers가 있으면 인덱스 값으로 replace하자
   for(let i = 0; i<numbers.length; i++){
        s = s.replaceAll(numbers[i],i) 
       //원본문자열이 그대로이므로 재할당해줘야함 그냥 s.replaceAll(numbers[i],i) 만 하면 s값은 그대로임
   }
    return Number(s)
}

//다른 사람 풀이
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {->만약 one7one8이면
//         let arr = answer.split(numbers[i]); -> ["",7,"",8] 
//         answer = arr.join(i); ->빈공간에 i 를 채워줌 ->"1718"
//     }

//     return Number(answer);
// }
//가장 중요한 것 split은 문자열을 배열로 join은 배열을 문자열로
