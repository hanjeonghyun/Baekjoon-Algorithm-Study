n, m = map(int, input().split())

for i in range(1, max(n, m) + 1):
    if n % i == 0 and m % i == 0:
        print(i, n // i, m // i)