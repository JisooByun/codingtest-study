"""
https://school.programmers.co.kr/learn/courses/30/lessons/92334
"""


def solution2(id_list, report, k):
  # 초기화
  answer = [0] * len(id_list)  # 0으로 초기화
  reports = {x: 0 for x in id_list}  # 0으로 dict 초기화

  for r in set(report):  # set으로 중복신고 없앰
    reports[r.split()[1]] += 1  # 신고당한 횟수 정리

  for r in set(report):  # 중복신고 제거
    if reports[r.split()[1]] >= k:  # 신고횟수가 기준치 넘으면
      answer[id_list.index(r.split()[0])] += 1  # 해당건의 신고자의 index를 찾아 플러스 1

  return answer
