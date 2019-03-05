import React from 'react';
import ReactDOM from 'react-dom';
class Item extends React.Component {
    constructor(props) {
        super(props);
        // console.log(111)
        this.state = {
            ary:props.data.concat(props.data[0]),// 在最后补一张
            len:props.data.length+1 // 填补后的数组的长度
        }
    }
    render() {
        // let {data} = this.props;
        // data.push(data[0]);// 在最后补一张
        let {ary,len} = this.state;
        let {index,initIndex} = this.props;
        let sty = {
            width: len*400+'px'
        };
        if(index==len){
            // 接下来 就要露白了
            // 要求 闪到第一张；然后再从第一张往后走
            sty = Object.assign(sty,{
                left:0
            })
            // console.log(initIndex)
            // initIndex(0) // 改变父组件的index
            setTimeout(() => {
                initIndex(1) 
            }, 10);
        }else{
            sty = Object.assign(sty,{
                left:-index*400+'px',
                transition:'left 0.3s ease'
            })
        }
        // let sty = {
        //     left:-index*400+'px',
        //     width:len*400 +'px',
        //     transition:'left 0.3s ease'
        // };

        return <ul className='listBox' style={sty}>
            {
                ary.map(item=>{
                    return(
                        <li key={Math.random()}>{item}</li>
                    )
                })
            }
        </ul>;
    }
}

export default Item