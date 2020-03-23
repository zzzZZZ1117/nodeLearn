
var buf1 = Buffer.alloc(256);//实例化一个 buffer 对象 buf1，缓冲区的大小是 256 字节
// console.log(buf1)//<Buffer 00 00 00 00 00 ...>
// console.log(buf1.length)//256
var buf2 = buf1.slice(246,257);//对 buf1 做切片操作，取出后 10 个字节，存放到 buf2 中
buf1.fill(1)//<Buffer 01 01 01 01 01 ...>
// console.log(buf2)
var arr = ['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 = Buffer.from(arr);
console.log(buf3)
buf3.copy(buf2);//复制buf3的内容到buf2中
console.log(buf2)
