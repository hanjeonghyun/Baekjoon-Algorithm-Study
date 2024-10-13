import sys

n = int(input())
s = set()

for i in range(n):
  order = list(sys.stdin.readline().split())

  if order[0] == 'add':
    if int(order[1]) in s:
      continue
    s.add(int(order[1]))

  if order[0] == 'remove':
      s.discard(int(order[1]))

  if order[0] == 'check':
    if int(order[1]) in s:
      print(1)
    else:
      print(0)

  if order[0] == 'toggle':
    if int(order[1]) in s:
      s.remove(int(order[1]))
    else:
      s.add(int(order[1]))

  if order[0] == 'all':
    s = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}

  if order[0] == 'empty':
    s = set()
