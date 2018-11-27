const chokidar = require('chokidar')
const EventEmitter = require('events').EventEmitter
const fs = require('fs')


class DirWatcher extends EventEmitter{
  constructor(){
  super()
  this.watcher
  }
  watch(path, delay){
    if(fs.statSync(path)){
      this.watcher = chokidar.watch(path + '/*.csv',{binaryInterval:delay, usePolling : true})
      console.log('Start watch')
      this.watcher.on('change',(filename)=>{
        this.emit('dirwatcher:changed', filename)
      })
    }
  }
  stopWatch(){
    this.watcher.close()
    console.log('Stop watch')
  }
}

module.exports = DirWatcher
