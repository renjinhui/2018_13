class Drag{
    constructor(ele){
        //this 是实例
        this.ele = ele;
        this.DragS = this.dragStart.bind(this);
        this.DragM = this.dragMove.bind(this);
        this.DragE = this.dragEnd.bind(this);
        this.ele.onmousedown = this.DragS;
    }
    get m(){return 12}
    dragStart(e){
        // this 是实例
        // this.ele 是拖动的元素
        this.ele.startX = e.pageX;
        this.ele.startY = e.pageY;// 鼠标的初始位置
        this.ele.startL = this.ele.offsetLeft;
        this.ele.startT = this.ele.offsetTop;// 盒子初始位置
        document.onmousemove = this.DragM;
        document.onmouseup = this.DragE;
    }
    dragMove(e){
        // 设置盒子的当前位置
        this.ele.style.left = e.pageX - this.ele.startX + this.ele.startL + 'px';
        this.ele.style.top = e.pageY - this.ele.startY + this.ele.startT + 'px';
    }
    dragEnd(e){
        document.onmousemove = null;
        document.onmouseup = null; 
    }
}