"""
https://school.programmers.co.kr/learn/courses/30/lessons/17681
"""


# def getMap(n,arr):
#     result = []
#     for i in arr:
#         b = format(i,'b')
#         # if len(b)< n:
#         #     b = '0'*(n-len(b))+b
#         result.append(b)

#     return result

# def solution(n, arr1, arr2):
#     answer = []
#     map1 = getMap(n,arr1)
#     map2 = getMap(n,arr2)

#     sum_map = []
#     for r1,r2 in zip(map1,map2):
#         r3 = int(r1)+int(r2)
#         r3 = str(r3).replace('2','1')
#         r3 = r3[-n:]
#         if len(r3) < n:
#              r3= '0'*(n-len(r3))+r3
#         print(r3)
#         sum_map.append(r3.replace('1','#').replace('0',' '))

#     return sum_map


def solution(n, arr1, arr2):
  answer = []
  for i,j in zip(arr1,arr2):
    # 비트 연산자를 이용한뒤에 bin()으로 2진수로 변환
    a12 = str(bin(i|j)[2:])
    print(a12)
    # rjust는 길이가 n이 될때까지 오른쪽에 0을 채워넣는것이다.
    a12=a12.rjust(n,'0')
    a12=a12.replace('1','#')
    a12=a12.replace('0',' ')
    answer.append(a12)
  return answer