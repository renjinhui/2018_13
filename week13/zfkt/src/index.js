import React from 'react';
import ReactDOM from 'react-dom';
// import './scss/index.scss';
import './css/index.css'
import 'swiper/dist/css/swiper.css' // 引入 swiper.css
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";

import App from './components/index';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store/index'
console.log(store.getState())


moment.locale('zh-cn');

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
