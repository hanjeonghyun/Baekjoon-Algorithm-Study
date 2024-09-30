n = int(input())
numbers = set(map(int, input().split()))

m = int(input())
m_numbers = list(map(int, input().split()))

for i in m_numbers:
  if i in numbers:
    print("1")
  else:
    print("0")