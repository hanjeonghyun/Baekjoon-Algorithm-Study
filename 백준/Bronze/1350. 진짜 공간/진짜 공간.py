import math

n = int(input())
arr = [int(x) for x in input().split()]
files = [x for x in arr if x != 0]
cluster = int(input())

if not files:
    answer = 0
else:
    answer = sum(math.ceil(file_size / cluster) * cluster for file_size in files)

print(answer)
