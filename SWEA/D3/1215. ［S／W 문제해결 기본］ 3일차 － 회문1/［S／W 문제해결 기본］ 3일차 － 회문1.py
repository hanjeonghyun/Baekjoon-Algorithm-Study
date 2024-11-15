T = 10
for test_case in range(1, T + 1):
    n = int(input())
    arr = [list(input()) for _ in range(8)]
    col = list(zip(*arr))
    cnt = 0
    
    for i in range(8): 
        for j in range(8 - n + 1):
            word = arr[i][j:j+n]
            word_2 = col[i][j:j+n]
            if word == word[::-1]:
                cnt += 1
            if word_2 == tuple(word_2[::-1]):
                cnt += 1
                
    print(f"#{test_case} {cnt}")
