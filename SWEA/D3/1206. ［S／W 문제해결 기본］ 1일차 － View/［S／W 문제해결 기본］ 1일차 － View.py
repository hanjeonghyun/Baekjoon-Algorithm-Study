T = 10
for test_case in range(1, T + 1):
    n = int(input())
    buildings = list(map(int, input().split()))
    cnt = 0
    
    for i in range(2, n - 2):        
        highest = max(buildings[i-1], buildings[i-2], buildings[i+1], buildings[i+2])
        if buildings[i] > highest:
            view = buildings[i] - highest
            cnt += view
            
    print(f"#{test_case} {cnt}")
