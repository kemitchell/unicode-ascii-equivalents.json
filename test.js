var data = require('./')

var characters = [ ]

data.forEach(function(element) {
  var character = element.unicode
  if (characters.indexOf(character) > -1) {
    throw new Error('Already defined "' + character + '" (x' + character.charCodeAt(0).toString(16)  + ')') }
  else {
    characters.push(character) }})
