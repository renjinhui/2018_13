import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {data1} = this.props;
        return <div className='list_box'>
            <img src={data1.url} alt=""/>
            <p>{data1.title}</p>
            <div>{data1.price}</div>
        </div>;
    }
}

export default App