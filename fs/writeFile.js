const fs = require('fs')

//------------------同步与异步写入-------------------
// 异步文件写入
fs.writeFile('./fs/座右铭.txt', '三人行，必有我师焉。', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('写入成功')
})
console.log('主线程先执行，执行完后取出异步线程的回调再执行')

// 同步写入
fs.writeFileSync('./fs/同步写入.txt', '同步内容')
console.log('主线程等待同步写入以后再执行')

//------------------同步与异步的追加写入-------------------
// 追加写入
fs.writeFile('./fs/座右铭.txt', '-----', { flag: 'a' }, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('追加成功')
})

// 异步追加
fs.appendFile('./fs/座右铭.txt', '择其善者而从之，其不善者而改之。', (err) => {
    if (err) {
        console.log(err)
        throw err
    }
    console.log('追加成功')
})

// 同步追加
fs.appendFileSync('./fs/座右铭.txt', '吾将上下而求索')

//------------------流式写入-------------------

let ws = fs.createWriteStream('./fs/关书有感.txt')
ws.write('半亩方塘一鉴开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问渠那得清如许\r\n')
ws.write('为有源头活水来\r\n')

ws.close() // 以上写入结束后，通道也会自动关闭
