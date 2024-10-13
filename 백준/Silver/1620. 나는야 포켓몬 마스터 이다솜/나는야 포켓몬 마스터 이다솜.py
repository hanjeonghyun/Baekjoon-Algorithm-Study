import sys

n, m = map(int, sys.stdin.readline().strip().split())
num_dict = {}
name_dict = {}

for i in range(n):
  name = sys.stdin.readline().strip()
  num_dict[i + 1] = name 
  name_dict[name] = i + 1

for j in range(m):
  k = sys.stdin.readline().strip()
  if k.isdigit():
    print(num_dict[int(k)])
  else:
    print(name_dict[k])
    