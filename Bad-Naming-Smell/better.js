// This code does validate a password text by given parameters, such as length, 
// blacklist of words, containing a uppercase, lowercase or non-alpha character.

function validatePassword({
  value,
  minLength,
  maxLength,
  blacklistedWords = [], // This is default value for blacklistedWords
  shouldContainDigit = false, // Default value means that this is optional
  denyCharacter = false,
  shouldContainUppercase = false,
  shouldContainLowercase = false
}) {
    
  if (isEmptyOrNull(value)) {
    return false;
  } 

  else if (isNotBetweenLength({ value, min: minLength, max: maxLength })) {
    return false;
  } 

  else if (shouldContainDigit && isNotContainingDigit(value)) {
    return false;
  } 

  else if (denyCharacter && isContainingChar()) {
    return false;
  } 

  else if (shouldContainLowercase && isNotContainingLowercase(value)) {
    return false;
  } 
  
  else if (shouldContainUppercase && isNotContainingUppercase(value)) {
    return false;
  }
  
  else if (blacklistedWords.length > 0 && isContainingBlacklistedWord({ value, blacklist: blacklistedWords })) {
    return false;
  } 

  return true;
}

function isEmptyOrNull(value) {
  return !value || value === "";
}

function isNotBetweenLength({ value, min, max }) {
  return value.length < min || value.length > max;
}

function isContainingBlacklistedWord({ value, blacklist }) {
  return blacklist.some(word => value.includes(word));
}

function isNotContainingDigit(value) {
  return !value.match(/^(?=.*\d).+$/);
}

function isContainingChar(value) {
  return !value.match(/^[0-9a-z]+$/);
}

function isNotContainingLowercase(value) {
  return !value.match(/^(?=.*[a-z]).+$/);
}

function isNotContainingUppercase(value) {
  return !value.match(/^(?=.*[A-Z]).+$/);
}
