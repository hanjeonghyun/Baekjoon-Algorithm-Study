import sys

n = int(input())
queue = []

for i in range(n):
  order = list(sys.stdin.readline().split())

  if order[0] == "push":
    queue.append(order[1]);

  if order[0] == "pop":
    if len(queue) < 1:
      print(-1)
    else:
      print(queue.pop(0))

  if order[0] == "size":
    print(len(queue))

  if order[0] == "empty":
    if len(queue) < 1:
      print(1)
    else:
      print(0)

  if order[0] == "front":
    if len(queue) < 1:
      print(-1)
    else:
      print(queue[0])

  if order[0] == "back":
    if len(queue) < 1:
      print(-1)
    else:
      print(queue[-1])
  
    
  