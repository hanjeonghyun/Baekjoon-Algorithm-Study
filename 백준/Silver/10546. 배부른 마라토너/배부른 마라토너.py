import sys

n = int(input())
people = {}


for _ in range(n):
    name = input()
    if people.get(name):
        people[name] += 1
    else:
        people[name] = 1

data = sys.stdin.read().split()

for name in data:
    if people.get(name):
        people[name] -= 1

name = [key for key, value in people.items() if value == 1]
print(name[0])
