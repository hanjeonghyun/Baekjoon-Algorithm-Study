a, b = map(int, input().split())

def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
        result %= b
    return result

if a >= b:
    print(0)
else:
    print(factorial(a))
