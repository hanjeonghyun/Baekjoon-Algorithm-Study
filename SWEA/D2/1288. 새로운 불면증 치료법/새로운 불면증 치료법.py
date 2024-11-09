T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    nums = set()
    k = 0
    while len(nums) < 10:
        k += 1
        num = k * n
        splited = map(int, str(num))
        nums.update(splited)
        
    print(f"#{test_case} {n * k}")