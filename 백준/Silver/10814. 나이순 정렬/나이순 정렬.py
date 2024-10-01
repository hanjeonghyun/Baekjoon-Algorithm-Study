import sys

list = sys.stdin.readlines()[1:]

list.sort(key=lambda iD: int(iD.split()[0]))
                                 
print("".join(list))