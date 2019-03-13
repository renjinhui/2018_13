import React from 'react';
import Swiper from 'swiper'
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidUpdate(){
        // 因为首次加载完成时， 我们拿到的数据是一个空的；所以这个时候 new ；
        //  不会有任何动效，因为 没有任何 slide
        // 当数据更新之后， 会重新渲染； 这时 当新数据渲染完毕之后
        // DOM结构中就有了我们要的 slide 这时 再去new ,就有对应的动效了
        //在DOM加载完成之后才能执行 new swiper
        // console.log(111111111111111111);
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            loop:true
        })
    }
    render() {
        let {data=[]} = this.props;// 解构获取传进来的列表数据
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    data.map((item,i)=>{
                        return (
                            <div className='swiper-slide' key={i}>
                                <img src={item} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
      </div>
    }
}

export default App