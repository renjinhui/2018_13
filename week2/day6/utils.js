var utils = {
    toAry:function (list) {
        var arr = [];
        try {
            arr = [].slice.call(list,0)// list.slice(0)
        } catch (error) {
            for(var i = 0 ;  i < list.length; i++){
                arr.push(list[i]);
            }
        }
        return arr;
    }
}