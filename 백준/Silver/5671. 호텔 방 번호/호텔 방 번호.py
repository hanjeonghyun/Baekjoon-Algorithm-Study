import sys

for line in sys.stdin:
    line = line.strip()
    answer = 0
    n, m = map(int, line.split())
    for i in range(n, m + 1):
        nums = list(str(i))
        if len(nums) == len(set(nums)):
            answer += 1

    print(answer)

