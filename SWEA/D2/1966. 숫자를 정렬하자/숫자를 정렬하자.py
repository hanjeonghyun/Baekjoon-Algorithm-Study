T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    nums = map(int, input().split())
    arr = sorted(nums)
    str_ = map(str, arr)
    result = ' '.join(str_)
    print(f"#{test_case} {result}")
