T = int(input())
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    k = []
    
    if n > m:
        for i in range(0, n - m + 1):
            s = 0
            for j in range(m):
                s += a[j + i] * b[j]
            k.append(s)
    elif n < m:
        for i in range(m - n + 1):
            s = 0
            for j in range(n):
                s += a[j] * b[j + i]
            k.append(s)
                
    print(f"#{test_case} {max(k)}")
