# Functions
def calculate_house_value(principal,interest,num):
  total = principal*(1+interest)**num
  return total

subtotal = calculate_house_value(100000,0.05,1)
total = subtotal - 10
print(total)
