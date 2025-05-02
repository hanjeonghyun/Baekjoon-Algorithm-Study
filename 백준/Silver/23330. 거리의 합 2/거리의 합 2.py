n = int(input())
lines = list(map(int, input().split()))
total = 0
lines.sort()

for i in range(n):
    total += 2 * (lines[i] * (2 * i - n + 1))

print(total)


