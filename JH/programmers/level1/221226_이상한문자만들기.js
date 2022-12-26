function solution(s) {
   
    let arr = s.split(" ") 
    //짝수번째는 대문자로 
    //홀수번째는 소문자로
    for(let i = 0; i<arr.length; i++){
       let temp = arr[i].split("")
       //console.log(temp)
      for(let j=0; j<temp.length; j++){
          if(j%2===0){
             temp[j] = temp[j].toUpperCase()
          }else{
           temp[j] = temp[j].toLowerCase()
          }
      }
      
        arr[i]= temp.join("")
    }
    return arr.join(" ")
}

//이 코드가 왜 안되는지 생각해 
// function solution(s) {
//     let arr = s.split(" ") 
//     console.log(arr)
//     //짝수번째는 대문자로 
//     //홀수번째는 소문자로
//     for(let i = 0; i<arr.length; i++){
//       for(let j=0; j<arr[i].length; j++){
//           if(j%2===0){
//               arr[i][j].toUpperCase()
//           }else{
//               arr[i][j].toLowerCase()
//           }
//       }
//     }
//     return arr.join(" ")
// }
// 안된 이유 : 문자열은 이뮤터블인데 바꾸려고 시도했기때문, 인덱스로 접근해서 배열화한뒤에 대/소문자화했으면됐겠지

//초기화를 이용해서 포문 한 번만 쓴 코드 -> 배우자
// function toWeirdCase(s){
//   var result = "";
//     var num = 0;

//   console.log(s.length);

//   for(var i = 0; i < s.length; i++){
//    if(s.charAt(i) == " "){
//     num = 0;
//     result += " ";
//     continue;
//    }
//     else if(num % 2 == 0){
//       result += (s.charAt(i)).toUpperCase();
//       num++;
//     }
//     else{
//       result += (s.charAt(i)).toLowerCase();
//       num++; 
//     }
//   }

//함수 실행 되게 특이하게 함;;;;; 이거 왜 되는지 나중에 찾아보기
// function toWeirdCase(s){
//   var result = "";

//   for(var word of s.split(" ")) {
//     for(var i in word) {
//       result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
//     }
//     result += " ";
//   };

//   return result.slice(0, -1);
// }
