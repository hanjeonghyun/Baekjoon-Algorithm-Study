import sys

n = int(sys.stdin.readline())

def factorial(n):
    total = 1
    for i in range(1, n + 1):
        total *= i
    return total

def zeroCount(num):
    zc = 0
    num = reversed(str(num)) 
    for i in num:
        if i == '0':
            zc += 1  
        else:
            break  
    return zc

print(zeroCount(factorial(n)))
