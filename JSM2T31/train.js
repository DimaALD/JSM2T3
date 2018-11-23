let chokidar = require('chokidar')

let watcher = chokidar.watch('data', { ignored: 'node_modules' })

watcher.on('all', (event, path, stat) => {
  console.log(event, path)
  if (event === 'change') {
    console.log(stat)
  }
})
