import sys

n, k = map(int, sys.stdin.readline().split())
count = 0

coins = reversed(list(map(int, sys.stdin.readlines())))

for unit in coins:
  if k < unit:
    continue

  count += k // unit
  k = k % unit

print(count)
  
    
