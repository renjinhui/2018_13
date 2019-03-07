// redux
// react-redux
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state={
            val:1
        }
    }
    componentWillMount(){
        this.setState({
            val:2
        })
    }
    render() {
        console.log(1)
        return <div className=''>
            {this.state.val}
        </div>;
    }
}

export default App