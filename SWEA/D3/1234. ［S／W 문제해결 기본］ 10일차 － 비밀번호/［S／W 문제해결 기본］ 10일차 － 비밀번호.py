T = 10
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    lst = [x for x in str(k)]
    stack = []
    
    for x in lst:
        if stack and x == stack[-1]:
            stack.pop()
            continue
        else:
            stack.append(x)
        
    answer = int(''.join(stack))
    print(f'#{test_case} {answer}')