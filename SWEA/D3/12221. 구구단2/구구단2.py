T = int(input())
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    if n >= 10 or k >= 10:
        print(f"#{test_case} -1")
    else:
        print(f"#{test_case} {n * k}")
    