T = int(input())
for test_case in range(1, T + 1):
    answer = 1
    arr = [list(map(int, input().split())) for _ in range(9)]
    arr_reversed = list(zip(*arr))
    subs = []
    
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            sub = [arr[x][j:j+3] for x in range(i, i+3)]
            subs.append([num for row in sub for num in row])
            
    for i in range(9):
        if len(set(arr[i])) < 9:
            answer = 0
            break
        elif len(set(arr_reversed[i])) < 9:
            answer = 0
            break
        elif len(set(subs[i])) < 9:
            answer = 0
            break
            
    print(f"#{test_case} {answer}")