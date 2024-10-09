# 에라토스테네스의 체 방법을 사용한 더 빠른 코드

m, n = map(int, input().split())

sieve = [True] * (n + 1)
sieve[0] = sieve[1] = False

for i in range(2, int(n ** 0.5) + 1):
    if sieve[i]:
        for j in range(i * i, n + 1, i):
            sieve[j] = False

for k in range(m, n + 1):
    if sieve[k]:
        print(k)
