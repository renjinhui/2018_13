var animate = (function () {
    var moveType = {
        linear:function linear(time,changeL,duration,beginL) {
            return changeL/duration*time + beginL;
        },
        easeIn: function (t,c,d,b) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function (t,c,d,b) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function (t,c,d,b) {
            if ((t /= d / 2) < 1) {
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            }
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    };
    function move2(ele,duration,obj,type,cb) {
        var curP = {};
        var changeP = {};
        for(var k in obj){
            curP[k] = utils.css(ele,k);
            changeP[k] = obj[k] - curP[k];
        }
        var time = 0;
        var timer = setInterval(function(){
            time += 10;
            if(time >= duration){
                time = duration;
                clearInterval(timer);
                // cb && cb();
            }
            for(var k in curP){
                var cur = moveType[type](time,changeP[k],duration,curP[k])
                utils.css(ele,k,cur)
            }
            if(time === duration){
                cb && cb();
            }
        },10)
    }
    return function (ele,duration,options,type,cb) {
        // 若 type 是 undefined 则直接给 type 一个 默认值‘linear’
        // 若 type 是 function  则 吧cb 设成该fn  然后 把type设成 ‘linear’
        if(type === undefined){ // if(!(type in moveType))
            type = 'linear';
        }else if(Object.prototype.toString.call(type)==='[object Function]'){
            cb = type;
            type = 'linear';
        }
        move2(ele,duration,options,type,cb);

    }
})()


// function fn() {
//     console.log(111);
// }
// // animate(ele,2000,{},'linear',callback)

// animate(ele,2000,{},'linear',fn)
// animate(ele,2000,{});
// animate(ele,2000,{},fn);
// ele 动的元素
// 2000 运动总时间
// {}  要动元素的哪些属性
// ‘linear’运动方式
// fn 是运动完成后的一个回调 