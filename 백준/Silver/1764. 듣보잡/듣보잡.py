import sys

n, m = map(int, input().split())
unheard = set()
unseen = set()

for i in range(n):
  unheard.add(sys.stdin.readline().strip())

for j in range(m):
  unseen.add(sys.stdin.readline().strip())

result = sorted(unheard & unseen)

print(len(result))
for name in result:
  print(name)
