import sys
input = sys.stdin.readline

k = int(input())
lope = []
result = []

for _ in range(k):
    lope.append(int(input()))
lope.sort(reverse=True)

for j in range(k):
    result.append(lope[j] * (j + 1))

print(max(result))

