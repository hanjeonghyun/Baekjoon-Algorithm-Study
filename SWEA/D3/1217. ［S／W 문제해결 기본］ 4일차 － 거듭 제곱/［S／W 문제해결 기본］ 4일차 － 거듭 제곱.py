def pow(n, m, cnt):
    if m == cnt:
        return n
    return n * pow(n, m, cnt + 1)

T = 10
for test_case in range(1, 11):
    t = int(input())
    n, m = map(int, input().split())
    print(f"#{test_case} {pow(n, m, 1)}")
    
