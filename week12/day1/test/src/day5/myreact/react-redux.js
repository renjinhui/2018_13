import React from 'react';
import PropTypes from 'prop-types';
export let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    return class Proxy extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        };
        constructor(props, context) {
            // props 是父组件的 行内属性
            // context 就是父组件的context
            super();
            //context.store.getState() 返回值 是 store里的 state
            this.state = mapStateToProps(context.store.getState());
            // this.state = {state1:state}
        }
        componentDidMount() {
            this.unsubscribe = this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()))
            });
        }
        componentWillUnmount() {
            this.unsubscribe();
        }
        render() {
            return <Component
            // this.state = {state1:state} 
            // ...之后的结果 就似乎 state1=state
            {
                ...this.state
            }

            // ... {dispatch:this.context.store.dispatch}
            {
                ...mapDispatchToProps(this.context.store.dispatch)
            }
            />
        }
    }
};
export class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    };
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    constructor() {
        super();
    }
    render() {
        // return <div>
        //     {this.props.children}
        // </div>
        return this.props.children
    }
}