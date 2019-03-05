import React from 'react';
import ReactDOM from 'react-dom';
class Arrow extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className='arrowBox'>
            <span> {'<'} </span>
            <span> {'>'} </span>
        </div>;
    }
}

export default Arrow