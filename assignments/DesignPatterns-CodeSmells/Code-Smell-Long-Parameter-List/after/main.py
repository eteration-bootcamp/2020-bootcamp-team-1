class Stock:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

class User:
    def __init__(self, name, balance, stocksList):
        self.name = name
        self.balance = balance
        self.stocksList = stocksList

stocksList = []

stocksList.append(Stock('APPL', 446.85, 300))
stocksList.append(Stock('AMZN', 3196.14, 50))
stocksList.append(Stock('FB', 263.06, 10))

# Constructor with 3 parameters is much more readable especially number of stocks increases.
user1 = User('John', 5000, stocksList)