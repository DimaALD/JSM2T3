const chokidar = require('chokidar')

class DirWatcher {
  watch (path, delay) {
    let watcher = chokidar.watch(path, { ignored: 'node_modules' })
    watcher.on('addDir', (event, path, stat) => {
      console.log(event, path)
      if (event === 'change') {

      }
    })
    return watcher
  }
}
let x = new DirWatcher()
x.watch().addListener()
