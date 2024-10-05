list = list(map(int, input().split()))
min = min(list)
cnt = 0

while True:
  cnt = 0
  for i in range(len(list)):
    if min % list[i] == 0:
      cnt += 1
  if cnt >= 3:
    print(min)
    break
  min += 1