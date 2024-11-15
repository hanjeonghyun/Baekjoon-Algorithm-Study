T = int(input())
lst = [1, 4, 9, 121, 484]
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    arr = list(range(n, m+1))
    arr = [x for x in arr if x in lst]
    print(f"#{test_case} {len(arr)}")
        
