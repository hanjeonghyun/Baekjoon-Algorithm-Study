T = int(input())
for test_case in range(1, T + 1):
    a, b, c = map(int, input().split())
    answer = 0
    if a == b == c:
        answer = a
    elif a == b:
        answer = c
    elif b == c:
        answer = a
    elif a == c:
        answer = b
        
    print(f"#{test_case} {answer}")
