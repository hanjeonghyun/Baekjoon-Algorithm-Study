a = int(input())
b = int(input())
c = int(input())

answer = a * b * c
    
str_answer = str(answer)

for i in range(10):
    print(str_answer.count(str(i)))