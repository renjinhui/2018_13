var ulBox = document.getElementById('list_box');
var btns = document.getElementsByTagName('button');

// 第一步 先获取数据

var data = null; // 用来存储 从后台获取的数据；

var xhr = new XMLHttpRequest(); // 创建ajax实例
xhr.open('get', './data.json', false); // 以get的方式 从data.json这个路径 同步获取数据
xhr.onreadystatechange = function () { // 监听请求状态
    console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
        // 代表请求成功；
        data = JSON.parse(xhr.responseText);
    }
}
xhr.send();

// 第二步 把拿到的数据渲染到页面上；
function giveHtml(data) {
    // data 是个形参； 它是要转到页面上的数据；
    data = data || [];
    var str = ''; //用来存储拼接好的 li 字符串；
    data.forEach((item, index, ary) => {
        str += `<li>
                    <div class="img_box">
                        <img src="${item.picImg}" alt="">
                    </div>
                    <div class="desc">${item.title}</div>
                    <div class="price">￥${item.price}</div>
                    <div class="price">${item.time}</div>
                    <div class="bot_box">
                        <div class="buyBtn">选购</div>
                        <div class="hot">${item.hot}</div>
                    </div>
                </li>`;
    })
    ulBox.innerHTML = str;
}
giveHtml(data); // data 实参；


// 实现排序
// 操作数据  把数据排好序  然后重新渲染数据；
// var ary = ['time','price','hot'];
var ary = [{
    key: 'time',
    flag: 1
}, {
    key: 'price',
    flag: 1
}, {
    key: 'hot',
    flag: 1
}];
// 1 代表升序 2 代表降序
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        // 点击每一个按钮
        // 若点击的是 上架时间  data按照时间排序 time '2018-01-23' - '2018-10-23' 
        // data.sort((a,b)=>{
        //     return a.time.replace(/-/g,'') - b.time.replace(/-/g,'')
        // })
        if (ary[i].flag === 1) {
            data.sort((a, b) => { // b 小对象 b[ary[i].key] b['price']
                return b[ary[i].key].toString().replace(/-/g, '') - a[ary[i].key].toString().replace(/-/g, '');
            })
            ary[i].flag = 2;
        } else {
            data.sort((a, b) => { // b 小对象 b[ary[i].key] b['price']
                return a[ary[i].key].toString().replace(/-/g, '') - b[ary[i].key].toString().replace(/-/g, '');
            })
            ary[i].flag = 1;
        }
        // data.sort((a,b)=>{
        //     return a[ary[i]].toString().replace(/-/g,'') - b[ary[i]].toString().replace(/-/g,'') //
        // })//把原始数据排好序
        // debugger;
        giveHtml(data);
    }
}