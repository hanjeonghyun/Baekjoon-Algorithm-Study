total = int(input())
for i in range(total):
    floor, room, guest = map(int, input().split(" "))
    guestfloor = guest % floor
    guestroom = guest // floor + 1
    if guestfloor == 0:
        guestfloor = floor
        guestroom -= 1
    
    print(guestfloor * 100 + guestroom)