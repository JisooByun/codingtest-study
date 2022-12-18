function solution(nums) {
    let answer = 0;
// 매개변수 nums 배열에서 3가지 숫자를 더하여 새로운 수를 만들어내는 과정을 간단하게 반복문을 사용하여
// 모든 숫자를 거치며 만들어낼 수 있는 모든 숫자를 만들어내고 만들어진 숫자를 미리 만들어둔 소수 판별 함수를 사용하여 소수인지 판별하고,
// 소수라면 answer의 값을 1씩 증가시켜준 뒤,
// 최종적으로 소수가 되는 경우의 개수를 반환하여 문제를 해결    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}
// 소수인지 아닌지를 판별하는 함수를 하나 만듭니다.
// 전달받은 매개변수의 값이 소수인지를 판별하기 위해서는 매개변수 값의 제곱근까지 숫자들에 대해
// 나누어 떨어지는 값이 있다면 소수가 아니고, 없다면 소수가 맞다고 반환합니다.

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

