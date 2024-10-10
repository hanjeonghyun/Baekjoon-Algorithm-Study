import sys

t = int(input())

for i in range(t):
    n, m = map(int, sys.stdin.readline().split())
    queue = list(map(int, sys.stdin.readline().split()))
    count = 0

    queue = [(priority, idx) for idx, priority in enumerate(queue)]

    while True:
        if queue[0][0] != max(queue, key=lambda x: x[0])[0]:
            queue.append(queue.pop(0))
        else:
            count += 1
            priority, idx = queue.pop(0)

            if idx == m:
                print(count)
                break
