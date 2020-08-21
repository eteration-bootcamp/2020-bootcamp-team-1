class User:
    def __init__(self, name, balance, stockNamesList, stockPricesList, stockQuantitiesList):
        self.name = name
        self.balance = balance
        self.stockNamesList = stockNamesList
        self.stockPricesList = stockPricesList
        self.stockQuantitiesList = stockQuantitiesList        

# Number of the parameters that the constructor takes is too much for good code readability. The line of code becomes hard to read especially when the number of stocks increases.
user1 = User('John', 5000, ['APPL', 'AMZN', 'FB'], [446.85, 3196.14, 263.06], [300, 50, 10])