while True:
    inputs = sorted(map(int, input().split()))

    if sum(inputs) == 0:
        break
    
    a, b, c = inputs
    
    if a ** 2 + b ** 2 == c ** 2:
        print("right")
    else:
        print("wrong")