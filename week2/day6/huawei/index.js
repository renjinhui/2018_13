// 思路 页面展示的数据都是从后台获取的
// 首先 从后台拿到数据后， 拼接成字符串 展示到页面


let listBox = document.getElementById('list_box');
let btns = document.getElementsByTagName('button');
let data = null; // 这个变量用来存储从后台获取的数据；

let xhr = new XMLHttpRequest();
xhr.open('get','./data.json',false);// get 请求方式；  ./data.json接口；  false 同步
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        // 获取成功
        data = JSON.parse(xhr.responseText);// 把获取到的JSON字符串转成JSON对象
    }
}
xhr.send();

console.log(data);
function giveHtml(data) {// 实现 把数据  转成  页面  可见的  画面；
    let str = '';
    data = data || [];
    data.forEach((item,index)=>{
        str += `<li>
                    <div class="img_box">
                        <img src="${item.picImg}" alt="">
                    </div>
                    <div class="desc">${item.title}</div>
                    <div class="price">￥${(item.price/100).toFixed(2)}</div>
                    <div class="bot_box">
                        <div class="buyBtn">选购</div>
                        <div class="hot">${item.hot}</div>
                    </div>
                </li>`
    });
    console.log(str);
    listBox.innerHTML = str;
}
giveHtml(data);


let ary = ['time','price','hot'];
let flag = 1;//1 代表一种顺序  2 代表相反的顺序
for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function () {
        // 点击每一个button;
        // 点击时 先把 data按指定要求排好序； 然后再把 data渲染到页面上
        if(flag === 1){
            data.sort((a,b)=>{
                // return a.time - a.time;
                // return a.price - b.price;
                return a[ary[i]].toString().replace(/-/g,'') - b[ary[i]].toString().replace(/-/g,'')
            });
            flag = 2;
        }else{
            data.sort((a,b)=>{
                // return a.time - a.time;
                // return a.price - b.price;
                return b[ary[i]].toString().replace(/-/g,'') - a[ary[i]].toString().replace(/-/g,'')
            })
            flag = 1;
        }
        
        giveHtml(data);
    }
}