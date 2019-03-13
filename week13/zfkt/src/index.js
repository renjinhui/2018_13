import React from 'react';
import ReactDOM from 'react-dom';
// import './scss/index.scss';
import './css/index.css'
import 'swiper/dist/css/swiper.css' // 引入 swiper.css
import App from './components/index';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store/index'
console.log(store.getState())
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
