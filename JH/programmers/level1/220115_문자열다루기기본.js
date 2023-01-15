// function solution(s) {
//     var answer = true
//   if(s.length === 4||s.length === 6) {
//      if (isNaN(s)){
//         answer = false;
//     }else{
//         answer = true;
//     }
//     return answer 
// } 
//   } //e를 숫자로 인식해서 통과못함 -> 처리해주자


function solution(s) {
  if(s.length === 4||s.length === 6) {  //문자열 길이가 4~6이니?
      
      //if문에는 숫자로 인식되는 친구들 e가 들어가서 숫자로 오해하고있거나 숫자가 맞거나 
     if (s.includes('e')){              //맞으면 e가 들어가면 false
        return  false;                 
     }                              
        return !isNaN(s);                //e가 들어가지 않고 NaN값이 아니면 true를 꺼내줘
      //else에는 문자가 들어간 친구들
    }else{
       return  false;                    //그 외엔 false를 해
    }
}
