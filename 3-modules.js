// Modules - Encapsulated code
//Common JS Every file is a module by default

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
console.log(data)

require('./7-mind')

sayHi('ramkumar')
sayHi(names.shyam)
sayHi(names.jadu)