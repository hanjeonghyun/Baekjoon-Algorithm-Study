T = 10
for test_case in range(1, T + 1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]
    arr_2 = list(zip(*arr[::-1]))
    diagonal = []
    diagonal_reverse = []
    sums = []
    for line in arr:
        total = sum(line)
        sums.append(total)
        
    for line in arr_2:
        total = sum(line)
        sums.append(total)
        
    for i in range(len(arr)):
        x = arr[i][i]
        z = arr_2[i][i]
        diagonal.append(x)
        diagonal_reverse.append(z)
        
    sums.append(sum(diagonal))
    sums.append(sum(diagonal_reverse))
    
    print(f"#{test_case} {max(sums)}")
