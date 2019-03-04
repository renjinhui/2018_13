import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props);
        return <div className=''>
            {this.props.children[3]||'wwwww'}
            {/* children 是react定义的  */}
        </div>;
    }
}
function Hello() {
    return(<h1>哈哈哈</h1>)
}
ReactDOM.render(<App>
    珠峰
    <div>hello</div>
    <h1>world</h1>
    <Hello/>
</App>,window.root)