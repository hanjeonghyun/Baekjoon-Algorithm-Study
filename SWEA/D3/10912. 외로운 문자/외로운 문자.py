T = int(input())
for test_case in range(1, T + 1):
    arr = list(input())
    stack = []
    for x in arr:
        if x in stack:
            stack.remove(x)
            continue
        stack.append(x)
        
    result = "Good" if len(stack) == 0 else ''.join(sorted(stack))
    print(f'#{test_case} {result}')
