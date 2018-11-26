const chokidar = require('chokidar')
const EventEmitter = require('events').EventEmitter
const fs = require('fs')


class DirWatcher extends EventEmitter{
  constructor(){
  super()
  }
  watch(path, delay){
    if(fs.statSync(path)){
      let watcher = chokidar.watch(path + '/*.csv',{binaryInterval:delay, usePolling : true})
      watcher.on('change',(filename)=>{
        this.emit('dirwatcher:changed', filename)
      })
    }
  }
}

module.exports = DirWatcher
