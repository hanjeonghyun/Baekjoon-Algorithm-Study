x, y = map(int, input().split())

def win_percent(x, y):
    return (y * 100) // x

z = win_percent(x, y)
more = 0

if z >= 99:
    print(-1)
else:
    left, right = 1, 1000000000
    result = -1

    while left <= right:
        mid = (left + right) // 2
        new_z = win_percent(x + mid, y + mid)

        if new_z > z:
            result = mid
            right = mid - 1
        else:
            left = mid + 1

    print(result)