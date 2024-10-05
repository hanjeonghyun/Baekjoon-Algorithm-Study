n = int(input())
original = n
cycle = 0

while True:
  a = n // 10  
  b = n % 10   
  n = (b * 10) + ((a + b) % 10) 
  cycle += 1   

  if n == original:  
    break

print(cycle)


