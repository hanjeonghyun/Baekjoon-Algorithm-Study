import math

n = int(input())

candidates = list(map(int, input().split()))

main, sub = map(int, input().split())

manager = len(candidates)

for x in candidates:
    x = x - main

    if x < 0:
        x = 0

    manager += math.ceil((x) / sub)


print(manager)
        

