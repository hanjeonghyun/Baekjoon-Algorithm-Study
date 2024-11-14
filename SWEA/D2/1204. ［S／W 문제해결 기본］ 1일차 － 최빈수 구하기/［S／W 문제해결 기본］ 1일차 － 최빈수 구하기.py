T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    arr = list(map(int, input().split()))
    
    count = [0] * (max(arr) + 1)  

    for i in arr:
        count[i] += 1  
    
    max_count = max(count)  

    answer = max(i for i, c in enumerate(count) if c == max_count)

    print(f"#{test_case} {answer}")
