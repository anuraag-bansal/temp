const path = require('path')

console.log(path.sep)

const filePath=path.join('/content','sub','test.txt')
// console.log(filePath)

// console.log(path.basename(filePath))

console.log(path.resolve(__dirname),'content','sub','test.txt')