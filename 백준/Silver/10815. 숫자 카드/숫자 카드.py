import sys
input = sys.stdin.readline

n = int(input())
lst = sorted(list(map(int, input().split())))
m = int(input())
check_lst = list(map(int, input().split()))

for i in check_lst:
    low, high = 0, n - 1
    exist = False
    while low <= high:
        mid = (low + high) // 2
        if lst[mid] > i:
            high = mid - 1
        elif lst[mid] < i:
            low = mid + 1
        else:
            exist = True
            break
    print(1 if exist else 0, end=' ')


