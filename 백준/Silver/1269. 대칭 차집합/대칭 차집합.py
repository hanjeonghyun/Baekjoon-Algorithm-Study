a, b = map(int, input().split())
A = set(map(int, input().split()))
B = set(map(int, input().split()))
count = 0

filtered_A = A - B
filtered_B = B - A

print(len(filtered_A) + len(filtered_B))



