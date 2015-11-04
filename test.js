var data = require('./')

var characters = [ ]

data.forEach(function(element) {
  var character = element.unicode
  if (characters.indexOf(character) > -1) {
    throw new Error(
      'Already defined "' + character + '" '+
        '(x' + character.charCodeAt(0).toString(16)  + ')') }
  else {
    characters.push(character) }})

var NON_ASCII_PRINTABLE = /[^\x20-\x7E]/

data.forEach(function(element) {
  var replacement = element.ascii
  if (NON_ASCII_PRINTABLE.test(replacement)) {
    throw new Error(
      replacement + ' contains a non-ASCII printable character') } })
