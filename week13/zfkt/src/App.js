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
function fn(p1,p2) {
  let str = 'combine';
  let v = '';
  let k = 0;//p1 index
  let j = 0;// p2 index
  for(let i = 0; i < str.length ; i++){
    if(p1[k]==str[i]){
      v+=p1[k];
      k++;
    }else if(p2[j] == str[i]){
      v += p2[j];
      j++;
    }else{
      return false
    }
  }
  return v;
}