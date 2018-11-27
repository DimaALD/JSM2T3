const dirwatcher = require('./dirwatcher')
const importer = require('./importer')
const a = new importer('data', 3000)
a.printInJSON()
