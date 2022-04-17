const data = require('./')

const characters = []

data.forEach(function (element) {
  const character = element.unicode
  if (characters.indexOf(character) > -1) {
    throw new Error(
      'Already defined "' + character + '" ' +
        '(x' + character.charCodeAt(0).toString(16) + ')')
  } else {
    characters.push(character)
  }
})

const NON_ASCII_PRINTABLE = /[^\x20-\x7E]/

data.forEach(function (element) {
  const replacement = element.ascii
  if (NON_ASCII_PRINTABLE.test(replacement)) {
    throw new Error(
      replacement + ' contains a non-ASCII printable character')
  }
})
