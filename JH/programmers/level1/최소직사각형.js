function solution(sizes) {
  //배열을 돌면서 세로의 길이가 더 길면 가로길이값과 세로길이 값 바꾸기 -> 가로가 더 길게끔
 let temp = 0;   
    
 for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      // temp = sizes[i][0];
      // sizes[i][0] = sizes[i][1];
      // sizes[i][1] = temp;
    [sizes[i][0] , sizes[i][1]] = [sizes[i][1], sizes[i][0]]
    }
  } 
  //가장 긴 가로, 세로길이 찾기
longestWidth = 0
longestHeight = 0
  for (let i = 0; i < sizes.length; i++) {
   
      if (longestWidth<sizes[i][0]){
          longestWidth = sizes[i][0]
      } 
      if (longestHeight<sizes[i][1]){
          longestHeight = sizes[i][1]
      }
      
  } return longestHeight * longestWidth;

}
