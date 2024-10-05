def Rev(num):
  return int(''.join(reversed(str(num))))

x, y = map(int, input().split())

print(Rev(Rev(x) + Rev(y)))
  