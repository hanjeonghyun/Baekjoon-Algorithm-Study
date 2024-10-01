import sys

n = int(sys.stdin.readline())
list = [0] * 10001

#계수정렬이 필요
for _ in range(n):
  list[int(sys.stdin.readline())] += 1

#append 시 재할당 발생으로 메모리 초과
for i in range(10001):
  if list[i] != 0:
    for j in range(list[i]):
      print(i)