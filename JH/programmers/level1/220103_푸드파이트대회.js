//https://school.programmers.co.kr/learn/courses/30/lessons/134240

//사고과정
//1223330333221 -> 리턴  대회를 위한 음식의 배치를 나타내는 문자열
//food는 칼로리가 적은 순서대로 음식의 양 0번은 물으로 항상1이고 
//food[i]는 i번 음식의 수
//food[i]가 짝수이면 공평하게 분배할 수 있고 아니면 -1한값을 공평하게 나눠줌 -> 여기서 생각을 바로 짝수든 홀수든 몫으로 반복한다는 것을 생각했으면 참 좋았을듯
//반복문써서 리턴은 앞부분만 만들고 0 붙이고 그 앞부분을 리벌스 하면 되지않을까?
//일단 앞부분만 만들어 볼까?
//앞부분은 어떻게 구성돼있나? food[1]을 짝수 홀수에 따라 리핏되는 횟수가 달라지겠네??

//오늘의 삽질 
//1. 처음에 어레이로 함 -> 이렇게 하면 반복문을 또 써야함.... repeat를 쓸 수 있는 문자열이 낫겟다고 판단, 그리고 리턴값도 어차피 문자열이었음
//처음부터 리턴 값의 형태를 생각해보고 전략을 짰으면 좋았을듯
//2. tmp 초기화를 0 으로함. 문자열인데,,, 이래서 타입스크립트가 대세구나
//3. 처음 생각할때 홀수와 짝수에따라 다르다고 생각했는데 사실 필요가없었다 홀수든 짝수든 몫의 크기만큼 반복하면된다


function solution(food) {
    let str = ""
    let tmp = ""
 
    for(let i=1; i<food.length; i++){
        console.log("--")
        tmp = ""
           // if(food[i]%2===0){ //짝수면
           //     tmp += i
           // }else{ //홀수면
           //     tmp += i
           // }
           //주석처리한 부분은 나중에 필요없음을 깨달음. 짝수든 홀수든 몫으로 반복한다는 사실을 생각했다면 필요가 없는 조건문임
          tmp += i
        str += tmp.repeat(parseInt(food[i]/2)) //i번음식을 /2했을때 몫만큼 푸쉬해줘야함
                         
        console.log(str)
    }
    return str+0+str.split("").reverse().join("")
}



최종 풀이
function solution(food) {
    let str = ""
    let tmp = ""
 
    for(let i=1; i<food.length; i++){
        tmp = ""//초기화 해줘야지
          tmp += i
        str += tmp.repeat(parseInt(food[i]/2)) //i번음식을 /2했을때 몫만큼 푸쉬해줘야함
    }
    return str+0+str.split("").reverse().join("")
}


//다른 사람 풀이
//로직은 거의 같으나 더 깔끔함
function solution(food) {
  let str = "";
  for (let i = 1; i < food.length; i++) {
    str += String(i).repeat(food[i] / 2);
    //String(i) 이런건 생각하지 못했다...
  }
  return str + "0" + str.split("").reverse().join("");
}

//오늘의 성장 : 초기화를 터득한 것같다. / 스스로 타입설정 잘못했던것을 깨달았다. 타입 생각해가면서 풀자. /풀면서 tmp같이 더 필요한 변수를 활용할 수 있게됨
//오늘 기억할 것 : repeat은 문자열에 쓸 수 있어요 / 리턴값의 타입을 먼저 생각해서 전략을 세우자 / 변수 새로 만들때 타입 한 번 더 생각하자 
