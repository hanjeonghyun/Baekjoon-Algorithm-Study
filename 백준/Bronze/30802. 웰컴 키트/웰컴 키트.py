participants = int(input())
shirts = list(map(int, (input().split())))
t, p = map(int, input().split())

need_t = 0
for i in shirts:
    if i > 0:
        need_t += i // t + (1 if i % t > 0 else 0)
        
need_p_a = participants // p
need_p_b = participants % p

print(need_t)
print(need_p_a, need_p_b)
