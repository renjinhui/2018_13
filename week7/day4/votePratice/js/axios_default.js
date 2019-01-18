axios.defaults.baseURL = 'http://localhost:8002';
axios.defaults.headers['content-type'] = 'apllication/text'
axios.defaults.transformRequest = function (data) {
    let str = '';
    for (let k in data) {
        str += `${k}=${data[k]}&`
    }
    str = str.replace(/&$/, '');
    return str;
}

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response)
    // let obj = {};
    // obj.a = response.data;
    // obj.b = response.request;
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});