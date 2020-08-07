## Bad Naming Smell

Functional programmers choose this way of coding because
they are obsessed with the performance of the program
but this code is extremely difficult to read and understand.
even they would forget what this function/parameter would do after minutes.

### Before :

```javascript
function val(v,c,a,b,e,l,bl)
```

### This piece of code could be better. But it needs some refactoring touch.

```javascript
function validatePassword({
  value,
  minLength,
  maxLength,
  blacklistedWords = [], // This is default value for blacklistedWords
  shouldContainDigit = false, // Default value means that this is optional
  denyCharacter = false,
  shouldContainUppercase = false,
  shouldContainLowercase = false
})
```
