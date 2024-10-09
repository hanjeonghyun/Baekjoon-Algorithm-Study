m, n = map(int, input().split())

def primeChecker(num):
    if num < 2: 
        return False
    return all(num % i != 0 for i in range(2, int(num ** 0.5) + 1)) 

for j in range(m, n + 1):
    if primeChecker(j): 
        print(j)

