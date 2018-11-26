let fs = require('fs')
const chokidar = require('chokidar')
// let x = fs.readFileSync('D:\\MOCK_DATA.csv', 'utf8')
// let x1 = x.split('\n')
// let arr1 = []
// let json = { id: '',
//   name: '',
//   brand: '',
//   company: '',
//   price: '',
//   isbn: '' }

// x1.map((x2) => {
//   let arr = x2.split(',')
//   json.id = arr[0]
//   json.name = arr[1]
//   json.brand = arr[2]
//   json.company = arr[3]
//   json.isbn = arr[4]
//   arr1.push(json)
// })
// console.log(arr1)

// fs.watch('data', (eventType, filename) => {
//   if(filename.endsWith('.csv')){
//   }
//   })

  chokidar.watch('data/*.csv', {binaryInterval:10000, usePolling : true}).on('change',(data)=>{
    console.log(data)
  })

