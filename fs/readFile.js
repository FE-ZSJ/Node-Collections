// 读取文件
const fs = require('fs')

// 异步读取
fs.readFile('./座右铭.txt', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data.toString())
})

// 同步读取
const data = fs.readFileSync('./座右铭.txt')
console.log(data.toString())

// 流式读取
const rs = fs.createReadStream('./关书有感.txt')
rs.on('data', chunk => {
    console.log(chunk.length) // 65536, 64kB
})
rs.on('end', () => {
    console.log('读取成功')
})

//------------------文件复制练习-------------------
// 同步读取写入
const process = require('process')
const data1 = fs.readFileSync('./座右铭.txt')
fs.writeFileSync('./座右铭2.txt', data1)
console.log(process.memoryUsage())

// 流式读取写入
const rs1 = fs.createReadStream('./座右铭.txt')
const ws = fs.createWriteStream('./座右铭3.txt')
// rs1.on('data', chunk => {
//     ws.write(chunk)
// })
// rs1.on('end', () => {
//     console.log(process.memoryUsage())
// })
rs1.pipe(ws)
