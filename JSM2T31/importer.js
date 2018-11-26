const dirwatcher = require('./dirwatcher')
const fs = require('fs')
const csv = require('jquery-csv')

class Importer {
constructor(path, delay){
    this.watch = new dirwatcher()
    this.watch.watch(path, delay)
    this.obj = {}
}

importSync(){ 
    this.watch.on('dirwatcher:changed', (filename)=>{
        this.obj = this.convertToJson(filename)
    })
    return this.obj;
}
import(){ 
  this.watch.on('dirwatcher:changed', (filename)=>{
    this.obj = this.convertToJson(filename)
  })
  return Promise.resolve(this.obj)
}  
printInJSON(){
  this.watch.on('dirwatcher:changed', (filename)=>{
    this.obj = this.convertToJson(filename)
    const file = filename.replace('.csv','.json')
    fs.writeFileSync(file, JSON.stringify(this.obj, null, " "))
  })
}
convertToJson(filename){
  let text = fs.readFileSync(filename, 'utf8')
  return csv.toObjects(text, {headerIndex : 1})
}
}
let a = new Importer('data', 3000)
a.printInJSON()
//this.printJSON(filename.replace('.csv','.json'), JSON.stringify(json, null , " "))

