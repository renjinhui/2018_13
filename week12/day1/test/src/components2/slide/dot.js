import React from 'react';
import ReactDOM from 'react-dom';
class Dot extends React.Component {
    
    render() {
        console.log('dot')
        let {data,index,initIndex} = this.props;
        console.log(index);
        // 当index 大于等于 数组（走到伪第一张）时； 我们让 n = 0;
        let n = index >= data.length ? 0 : index;
        return <div className='dot_box'>
            <ul>
                {
                    data.map((item,i)=>{
                        if(i===n){
                            // 走到当前元素了
                            return <li key={i} className='dot current'></li>
                        }else{
                            return <li className='dot' onClick={()=>{initIndex(i)}} key={i}></li>
                        }
                    })
                }
            </ul>
        </div>;
    }
}

export default Dot