import React from 'react';
import ReactDOM from 'react-dom';
class Arrow extends React.Component {
    
    render() {
        console.log('arrow')
        let {onLeft,onRight} = this.props;
        return <div className='arrowBox'>
            <span
                onClick={onLeft}
            > {'<'} </span>
            <span
                onClick={onRight}
            > {'>'} </span>
        </div>;
    }
}

export default Arrow