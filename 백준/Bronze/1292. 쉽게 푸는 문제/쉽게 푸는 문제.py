a, b = map(int, input().split())
list = []

for i in range(1, b+1, 1):
  for j in range(i):
    list.append(i)

print(sum(list[a-1:b]))