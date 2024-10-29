import sys

n, t = map(int, sys.stdin.readline().split())
store = {}

for _ in range(n):
    [site, pw] = list(sys.stdin.readline().split())
    store[site] = pw

for _ in range(t):
    site = sys.stdin.readline().strip()
    print(store.get(site))
    
