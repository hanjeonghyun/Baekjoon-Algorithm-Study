import math

T = int(input())
for test_case in range(1, T + 1):
    arr = list(map(int, input().split()))
    arr.sort(reverse=False)
    arr.remove(min(arr))
    arr.remove(max(arr))
    average = sum(arr) / len(arr)
    print(f"#{test_case} {round(average)}")
