import math

T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    cards = list(input().split())
    
    a = cards[:math.ceil(n / 2)]
    b = cards[math.ceil(n / 2):]
    
    shuffle = []
    for i in range(max(len(a), len(b))):
        if i < len(a):  
            shuffle.append(a[i])
        if i < len(b):  
            shuffle.append(b[i])
    
    result = ' '.join(shuffle)
    print(f'#{test_case} {result}')
