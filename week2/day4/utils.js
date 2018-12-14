window.UtilObject = (function() {
  function likeAryTo(likeAry) {
    try {
      return [].slice.call(likeAry, 0)
    } catch(e) {
      let newArr = []
      for (let i = 0; i < likeAry.length; i++) {
        newArr[i] = likeAry[i]
      }
      return newArr
    }
  }

  function sum() {
    let total = null
    for (let i = 0; i < arguments.length; i++) {
      let cur = Number(arguments[i])
      if (!isNaN(cur)) {
        total += cur
      }
    }
    return total
  }

  var name = 'hello ary'

  return {
    name,
    likeAryTo,
    sum
    // name: name,
    // likeAryTo: likeAryTo,
    // sum: sum
  }

})()