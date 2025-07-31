target = input()
n = int(input())
answer = 0

for _ in range(n):
    ring = input() * 2
    if  target in ring:
        answer += 1

print(answer)