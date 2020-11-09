def ground_shipping_cost(weight):
  if weight <= 2:
    cost = weight * 1.50 + 20.00
  elif weight > 2 and weight <= 6:
    cost = weight * 3.00 + 20.00
  elif weight > 6 and weight <= 10:
    cost = weight * 4.00 + 20.00
  else: 
    cost = weight * 4.75 + 20.00
  return cost

premium_ground_shipping = 125.00

print(ground_shipping_cost(8.4))

def drone_shipping_cost(weight):
  if weight <= 2:
    cost = weight * 4.50
  elif weight > 2 and weight <= 6:
    cost = weight * 9.00
  elif weight > 6 and weight <= 10:
    cost = weight * 12.00
  else:
    cost = weight * 14.25
  return cost

print(drone_shipping_cost(1.5))

def check_cheapest_shipping_cost(weight):
  if ground_shipping_cost(weight) < drone_shipping_cost(weight) and ground_shipping_cost(weight) < premium_ground_shipping:
    print("Ground shipping is cheapest and the cost is $" + str(ground_shipping_cost(weight)))
  elif drone_shipping_cost(weight) < ground_shipping_cost(weight) and drone_shipping_cost(weight) < premium_ground_shipping:
    print("Drone shipping is cheapest and the cost is $" + str(drone_shipping_cost(weight)))
  else:
    print("Premium ground shipping is cheapest and the cost is $125.00")

check_cheapest_shipping_cost(41.5)