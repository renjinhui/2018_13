let $ul = $('.userList>ul');
let clientH = document.documentElement.clientHeight || document.body.clientHeight;
let bodyH = document.body.scrollHeight;// 整个页面的高度

let canGet = true;// 控制scroll时能否加载新数据的
let pageNum = 1;// 控制页码
let maxPage = 0;// 最大页码

// 需要请求列表数据
function getData(){
    canGet = false;// 一加载数据  就让该属性时 false
    axios.get('/getMatchList',{
        params:{
            limit:10,
            // page:1,
            page:pageNum,
            search:''
        }
    }).then((data)=>{
        console.log(data);
        bindHtml(data.list);
        maxPage = data.pageNum;
        canGet = true;// 数据渲染完成之后  重新把值改成 true
        bodyH = document.body.scrollHeight; // 更新 bodyH
    })
}
getData();

function bindHtml(data){
    let str = $ul.html() || '';
    data.forEach(item=>{
        str += `<li>
                    <a href="detail.html?userId=${item.id}">
                        <img src="${item.picture}" alt="" class="picture">
                        <p class="title">
                            <span>${item.name}</span>
                            |
                            <span>编号 #${item.matchId}</span>
                        </p>
                        <p class="slogan">${item.slogan}</p>
                    </a>
                    <div class="vote">
                        <span class="voteNum">${item.voteNum}</span>
                        <a href="javascript:;" class="voteBtn">投他一票</a>
                    </div>
                </li>`
    })
    $ul.html(str);

}

// 往上滑动时； 需要加载新的数据；页面底部 与 当前划过的距离作比较
// 滑动的距离 + 一屏的高度 + 200px > 页面底部到顶部的距离

window.onscroll = function(e){
    let scrollT = document.documentElement.scrollTop;
    if(scrollT+clientH+200 > bodyH){
        // 加载新数据
        // 怎么保证数据加载完成之前 不再进行getData();
        if(!canGet)return; // 只要canGet 是个false； 就不能向下进行
        pageNum++;
        getData();
        if(pageNum == maxPage){
            // 获取所有的数据之后  就不再去请求新的数据了；
            window.onscroll = null;
        }
    }
}
