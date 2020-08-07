# CODE SMELL - Long Parameter List

Long parameter list in a method call is a code smell. It indicates that there might be something wrong with the implementation.

There is no single rule for how many is too many parameters. Usually more than three or four is considered too many.

# Implemented Solution

"If the parameters belong to a single object, preserve whole object" solution was implemented in "after" folder.

This solution increases readability of the code.

Before:
```python
user1 = User('John', 5000, ['APPL', 'AMZN', 'FB'], [446.85, 3196.14, 263.06], [300, 50, 10])
```

After:
```python
user1 = User('John', 5000, stocksList)
```