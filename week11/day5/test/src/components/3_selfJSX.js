let fn = function (str) {
    return str.replace(/[A-Z]/g,function(n){
        return '-'+n.toLowerCase()
    })
}
class Element{
    constructor(type,attr,children){
        // 这三个是形参
        console.log(type,attr,children);
        this.type = type;
        this.attr = attr;
        this.children = children;
    }
    render(){
        // 渲染dom

        // 根据标签名 创造元素
        let ele = document.createElement(this.type);
        // attr里边是 要给 该元素的 行内属性
        for(let key in this.attr){
            // this.attr 是 null 不会报错
            // htmlFor  className  style
            switch (key) {
                case 'htmlFor':
                    ele.setAttribute('for',this.attr[key])
                    break;
                case 'className':
                    ele.setAttribute('class',this.attr[key])
                    break;
                case 'style':
                    // 把传进来的对象 转成 浏览器能识别的字符串
                    let str = '';
                    let obj = this.attr[key];
                    for(let k in obj){
                        str += `${fn(k)}:${obj[k]};`
                    }
                    // slice(n,m)
                    str = str.slice(0,str.length-1);// 去掉最后一个分号
                    ele.setAttribute(key,str)
                    break;    
                default:
                    ele.setAttribute(key,this.attr[key])
                    break;
            }
            // ele.setAttribute(key,this.attr[key])
        }
        this.children.forEach(item=>{
            let nEle = item instanceof Element ? 
                item.render() 
                : 
                document.createTextNode(item);//创造文件节点
            ele.appendChild(nEle); 
            nEle = null;   
        })
        return ele;// 返回创造的元素
    }
}

let react = {
    creatElement(type,attr,...children){
        return new Element(type,attr,children)// 三个实参
    }
};
let reactDom = {
    render(ele,container){
        container.appendChild(ele.render())
    }
};

// 目的
let ele = react.creatElement(
    'div',
    {id:'qqq',className:'www',style:{color:'red',fontSize:"40px",zIndex:100}},
    '哈哈哈',
    react.creatElement('h1',null,'呵呵呵')
)
reactDom.render(ele,document.getElementById('root'));




/*function P(){
    // 私有
}
P.prototype.render = function () {
    
}
P.fn = function(){

}
class Person{
    constructor(props){
        //私有
    }
    render(){

    }
    static fn(){

    }
}

class Son extends Person{
    constructor(props){
        // 必写 super() 相当于 call 继承
        super(props)// super 传递的参数 是传给了Person的constructor函数 
        this.a = 12
    }
}
let p1 = new Person('小红');
p1.render();
// p1.fn() 错误
Person.fn()*/