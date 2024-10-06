import sys

n = int(sys.stdin.readline())
lst = []

for line in range(n):
  line = sys.stdin.readline()
  x, y = map(int, line.split())
  lst.append([x, y])

lst.sort(key = lambda x: (x[1], x[0]))

for i in lst:
  print(i[0], i[1])
  
  