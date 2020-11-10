def getNthFib(n):
    # Write your code here.
    if n == 1:
		return 0
	elif n == 2:
		return 1
	else:      # 1 right now   +    1 right now
		return getNthFib(n - 2) + getNthFib(n - 1)
	
# getNthFib(3 - 2) == 1
# value of this is 0

# getNthFib(3 - 1) == 2
# value of this is 1

# 0 + 1 == 1 which is position n == 3
# getNthFib(3) == 1 because 0 + 1

# n == 4
# getNthFib(4 - 2) == 2
# value is 1
# getNthFib(4 - 1) == 3
# value is 1
# getNthFib(4) == 1 + 1 == 2