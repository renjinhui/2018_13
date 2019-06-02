
var obj = {
    key:{
        to:{
            ok:'okfe',
            fe:['hello','world']
        }
    },
    target:[
        1,
        2,
        {ok:'okfe'},
        'success'
    ]
};
function fn(str) {
    str = str.replace(/\[/g,'.').replace(/\]/,'');
    let ary = str.split('.');
    let temp = null;
    let o = obj
    ary.forEach(item => {
        temp = o[item]
        o = temp; 
    });
    return temp
}