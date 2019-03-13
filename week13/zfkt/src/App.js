const fucArr = [
  next => {
    setTimeout(() => {
      console.log(1);
      next()
    }, 300)
  },
  next => {
    setTimeout(() => {
      console.log(2);
      next()
    }, 200)
  },
  next => {
    setTimeout(() => {
      console.log(3);
      next()
    }, 100)
  }
]
var run = arr => {
    let a = arr;
    let f = function () {
      if(a.length==0)return;
      f = arr.shift()
      f(f)
    }
    f()
}
// 实现一个run方法,使得run(fucArr)能顺序输出1、2、3.