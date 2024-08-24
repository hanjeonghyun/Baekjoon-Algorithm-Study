num = int(input())

ans = 0
for i in range(1, num):  
    ans = i
    m = sum(map(int, str(ans)))  
    if ans + m == num:
        print(i)
        break
else:
    print("0") 
