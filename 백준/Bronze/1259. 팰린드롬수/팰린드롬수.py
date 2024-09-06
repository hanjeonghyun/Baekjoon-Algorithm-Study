while True:
  lst = input()
  if lst == "0":  
      break
  if lst == lst[::-1]:  
      print("yes")
  else:
      print("no")

