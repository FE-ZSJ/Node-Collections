let buf_1 = Buffer.alloc(10) // 创建长度为10字节的Buffer
console.log(buf_1)

let buf_2 = Buffer.allocUnsafe(100)// 创建长度为100字节的Buffer，Buffer中可能会存在旧的数据
console.log(buf_2)

let buf_3 = Buffer.from('hello')// 通过字符串创建Buffer
console.log(buf_3)

let buf_4 = Buffer.from([105, 108])// 通过数组创建Buffer
console.log(buf_4.toString()) // utf-8编码，读取字符串结果
console.log(buf_4[0]) // 读取
buf_4[1] = 97 // 修改
console.log(buf_4.toString())
console.log(buf_4)

let buf_5 = Buffer.from('你好') // 数值超过255，超过8位的高位会被舍弃
console.log(buf_5) // 一个uft-8占3个字节
