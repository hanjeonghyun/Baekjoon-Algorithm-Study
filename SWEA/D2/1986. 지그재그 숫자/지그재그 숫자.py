T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    answer = 0 
    for i in range(1, n + 1): 
        if i % 2 == 1:
            answer += i
        else:
            answer -= i
    print(f"#{test_case} {answer}")
