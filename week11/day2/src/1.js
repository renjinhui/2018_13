let btn = document.getElementById('btn');
let flag = true;// true 黑；false 红
btn.onclick = function(){
    if(flag){
        this.style.color = 'red'
    }else{
        this.style.color = 'black'
    }
    flag = !flag
}