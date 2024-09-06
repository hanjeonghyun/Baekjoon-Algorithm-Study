Soongsil, Korea, Hanyang = list(map(int, input().split()))

values = {'Soongsil': Soongsil, 'Korea': Korea, 'Hanyang': Hanyang}

if Soongsil + Korea + Hanyang >= 100:
    print("OK")
else:
  min_var = min(values, key = values.get)
  print(min_var)