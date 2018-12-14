window.UtilObject = (function(){
  // 这里面定义的变量都是私有变量 跟全局不发生任何关系

  /**
   * likeAryTo
   * @desc 将类数组转换成数组
   * @param {likeAry} likeAry 
   */
  function likeAryTo(likeAry) {
    try {
      return [].slice.call(likeAry, 0)
    } catch (error) {
      let newArr = []
      for (let i = 0; i < likeAry.length; i++) {
        newArr[i] = likeAry[i]
      }
      return newArr
    }
  }

  function sum() {

  }

  return {
    likeAryTo,
    sum
  }

  // return [likeAryTo, sum]

})()