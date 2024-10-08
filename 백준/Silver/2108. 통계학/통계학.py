import sys
from collections import Counter

def myMode(n):
    max_count = Counter(n).most_common(2)

    if len(max_count) > 1 and max_count[0][1] == max_count[1][1]:
        return max_count[1][0]
    else:
        return max_count[0][0]

n = int(input())
lst = []

for _ in range(n):
    lst.append(int(sys.stdin.readline()))

lst.sort()

print(round(sum(lst) / len(lst))) 
print(lst[len(lst) // 2])  
print(myMode(lst))  
print(max(lst) - min(lst))  
