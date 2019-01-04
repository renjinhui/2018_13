class Drag{
    constructor(ele){
        this.ele = ele;
        this.DragS = this.dragStart.bind(this);
        this.DragM = this.dragMove.bind(this);
        this.DragE = this.dragEnd.bind(this);
        on(this.ele,'mousedown',this.DragS)
    }
    dragStart(e) {
        this.ele.startX = e.pageX;
        this.ele.startY = e.pageY;
        this.ele.startL = parseFloat(this.ele.style.left);
        this.ele.startT = parseFloat(this.ele.style.top);
        on(document,'onmousemove',this.DragM);
        on(document,'mouseup',this.DragE);

        fire(this.ele,'myZIndex')
    }

    dragMove(e) {
        e = e || window.event;
        e.preventDefault();
        e.returnValue = false;
        this.ele.style.left = this.ele.startL + e.pageX - this.ele.startX + 'px';
        this.ele.style.top = this.ele.startT + e.pageY - this.ele.startY + 'px';
    }

    dragEnd(e){
        console.log(this.ele);
        off(document,'mousemove',this.DragM);
        off(document,'mouseup',this.DragE);
    }

}
