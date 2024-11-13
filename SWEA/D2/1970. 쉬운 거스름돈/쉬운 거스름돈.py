T = int(input())
money = [50000, 10000, 5000, 1000, 500, 100, 50, 10]
for test_case in range(1, T + 1):
    howMany = [0, 0, 0, 0, 0, 0, 0, 0]
    price = int(input())
    
    for i in range(len(money)):
        if price >= money[i]:
            howMany[i] += price // money[i]
            price = price % money[i]
            
    print(f"#{test_case}")
    print(*howMany)
            
    