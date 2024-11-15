T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    arr = list(map(int, input().split()))
    average = sum(arr) / len(arr)
    
    low_people = [x for x in arr if x <= average]
    print(f"#{test_case} {len(low_people)}")
    
