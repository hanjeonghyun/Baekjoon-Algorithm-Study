T = int(input())
for test_case in range(1, T + 1):
    n, a, b = map(int, input().split())
    min_subs = min(a, b)
    if n - (a + b) < 0:
        max_subs = (a + b) - n
    else:
        max_subs = 0
    print(f"#{test_case} {min_subs} {max_subs}")
