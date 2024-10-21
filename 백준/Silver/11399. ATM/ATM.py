import sys

n = int(sys.stdin.readline());
p = list(map(int, sys.stdin.readline().split()));
people = [];
t = 0;

for i in range(len(p)):
    people.append([i, p[i]]);

people.sort(key = lambda x : x[1]);

for i in range (1, len(people) + 1):
    sum_val = sum([x[1] for x in people[:i]]);
    t += sum_val

print(t);

