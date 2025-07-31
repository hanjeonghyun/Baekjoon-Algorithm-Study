import math

n = int(input())

for _ in range(n):
    s, n, t, l = list(input().split())
    limit = int(l) * (10 ** 8)
    count = 0
    if s == 'O(N)':
        count = int(n) * int(t)
    elif s == 'O(2^N)':
        count = (2 ** int(n)) * int(t)
    elif s == 'O(N!)':
        count = math.factorial(int(n)) * int(t)
    elif s == 'O(N^2)':
        count = (int(n) ** 2) * int(t)
    elif s == 'O(N^3)':
        count = (int(n) ** 3) * int(t)

    if limit < count:
        print('TLE!')
    else:
        print('May Pass.')
