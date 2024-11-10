T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    nums = sorted(map(int, input().split()))
    arr = ' '.join(map(str, nums))
    print(f"#{test_case} {arr}")