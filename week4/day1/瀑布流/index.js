var data = null;// 用来存储后台获取的数据；
var oUl = document.getElementsByClassName('ul_box');// 获取所有的ul
var imgs = document.getElementsByTagName('img');



function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','./data.json',false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && /^(200|304)$/.test(xhr.status)){
            data = utils.jsonParse(xhr.responseText)
        }
    }
    xhr.send(); 
}
getData();

// console.log(data)
// 把获取到的数据渲染到页面上
function giveHtml(data) {
    // 获取到数据 以什么方式渲染到页面上
    // 把数据挨个放到每一个ul中 ; 用数据的索引跟 5 取余；
    data = data || [];
    data.forEach(function(item,index){
        var str = `<li><img src='../images/timg.gif' realSrc="${item.src}" alt="" height="${item.height}">
        <h3>${item.title}</h3></li>`;
        // oUl[index%5] 每5个一轮
        // oUl[index%5].innerHTML += str;// 在原来的基础上 再去添加新的li
        var temp = getMinUl();
        temp.innerHTML += str;
    })
}
giveHtml(data);
giveHtml(data);
giveHtml(data);
giveHtml(data);

function getMinUl() {
    // 获取长度最低的那个ul 
    // oUl 按照clientHeight
    var ary = utils.likeAryTo(oUl); // 转成数组
    ary.sort((a,b)=>{
        // 按照 元素的clientHeight排序
        // 图片为加载出来时 会导致 clientHeight 不准确
        return a.clientHeight - b.clientHeight;
    })
    // 升序排 第一个就是最短的那个ul
    return ary[0];
}


function loadImg(img) { // 专门实现图片的懒加载
    // 进来先判断该图片是否已经加载出来？
    if(img.flag){return};
    var offsetTop = utils.offset(img).top + 100;
    var screenHeight = utils.win('clientHeight');
    var scrollTop = utils.win('scrollTop');
    if(screenHeight + scrollTop >= offsetTop){
        // 说明图的顶部已经露出
        // img.src = img.getAttribute('realSrc');
        var tempImg = new Image();// document.creatElement('img');
        var realSrc = img.getAttribute('realSrc');
        tempImg.src =realSrc;// 获取图片真实路径 并赋给这个临时的img
        tempImg.onload = function () {
            // 从远程把图片资源获取到计算机浏览器本地缓存区；
            img.src = realSrc;// 
            img.flag = true;// 自定义一个属性 用来判断是否加载过
            fadeIn(img);// 当真正的图片显示的时候 执行fadeIn
        }
    }
}
function fadeIn(ele){
    // ele 要进行 渐显的元素
    ele.style.opacity = 0;
    var timer = setInterval(function(){
        let t = parseFloat(ele.style.opacity);
        // 现在的问题是定时器一直在执行；
        if(t>=1){// 若opacity已经加到了1 ； 则直接清除定时器并把opacity设置成1
            ele.style.opacity = 1;
            clearInterval(timer);
            return;
        }
        // ele.style.opacity += 0.1;
        ele.style.opacity = t+0.1;
    },10)
}
function loadAll(imgs) {// 页面中所有图片懒加载
    for(var i = 0; i < imgs.length; i++){
        loadImg(imgs[i]);
    }
}
loadAll(imgs);// 保证首屏的图先出现
window.onscroll = function () {
    loadAll(imgs);
}