var now = new Date().getTime();
// 等待队列也有先后顺序
console.log(111);
setTimeout(() => {
    console.log(333)
}, 2000);
setTimeout(() => {
    console.log(222)
}, 1000);
for(let i = 0; i < 999999999; i++ ){

}// 时间大概是 1.4s左右
setTimeout(() => {
    console.log(555)
}, 10);
console.log(444);