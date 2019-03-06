import React from 'react';
import ReactDOM from 'react-dom';
class Arrow extends React.Component {
    constructor() {
        super();
    }
    componentWillReceiveProps(next){
        console.log(next)
    }
    shouldComponentUpdate(nextProps,nextState){
        return false
    }
    render() {
        console.log(111)
        return <div className='arrowBox'>
            <span> {'<'} </span>
            <span> {'>'} </span>
        </div>;
    }
}

export default Arrow