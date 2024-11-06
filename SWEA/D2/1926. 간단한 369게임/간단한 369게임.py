T = int(input())
for i in range(1, T + 1):
    cnt = sum(1 for x in str(i) if x in '369')
    
    if cnt > 0:
        print('-' * cnt, end=' ')
    else:
        print(i, end=' ')
