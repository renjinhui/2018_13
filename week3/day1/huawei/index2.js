var ulBox = document.getElementById('list_box');
var oLis = ulBox.getElementsByTagName('li');
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
        str += `<li time='${item.time}' price='${item.price}' hot='${item.hot}'>
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
// 直接操作DOM； 获取到DOM列表之后； 把这个列表先排序
// 利用 文档碎片 把append的操作放到文档碎片中；
// 最后 把文档碎片 append到咱们的 ulBox 中；

// console.log(oLis)
var flag = 1;// 1  -1 
function mySort(type) {
    console.log(type);
    var ary = [].slice.call(oLis,0);
    ary.sort((a,b)=>{
        // a
        // li 元素
        // a.getAttribute('price')
        return (a.getAttribute(type).replace(/-/g,'') - b.getAttribute(type).replace(/-/g,''))*flag;
    });
    // ary 中存储是 排好序的 每一个 li 
    var frag = document.createDocumentFragment();// 创造一个文档碎片
    ary.forEach((item)=>{
        frag.appendChild(item);
    })
    ulBox.appendChild(frag);
    frag = null;
    flag*=-1;
}
var ary = ['time','price','hot'];
for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function () {
        for(let i=0;i<btns.length;i++){
            let cur = btns[i] ;
            if(this != cur){
                
            }
        }
        mySort(ary[i])
    }
}
