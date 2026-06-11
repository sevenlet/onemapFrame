const http = axios.create();

// http.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.error(error);
//     return Promise.reject(error);
//   },
// );
//
// http.interceptors.response.use(
//   (response) => {
//     // 如果返回的状态不是200 就报错 按需修改
//     // if (response.status && response.status !== 200 && response.status !== 201) {
//     //   return Promise.reject(new Error('错误'));
//     // }
//     return response;
//   },
//   (error) => {
//     console.error(error);
//     // router.push({ name: 'serviceError' });
//     return Promise.reject(error);
//   },
// );

// 创建一个变量来存储已经发送的请求的标识符
let pendingRequests = new Map();

// 使用请求拦截器
http.interceptors.request.use(config => {
    // 生成请求的唯一标识符，例如通过连接URL和参数
    const requestKey = `${config.url}&${config.method}&${JSON.stringify(config.params)}&${JSON.stringify(config.data)}`;

    // 检查是否已经有相同的请求
    if (pendingRequests.has(requestKey)) {
        // 如果有，取消这次请求
        config.cancelToken = new axios.CancelToken((cancel) => cancel('重复的请求被拦截'));
    } else {
        // 如果没有，增加这次请求的标识符
        config.cancelToken = new axios.CancelToken((cancel) => {
            pendingRequests.set(requestKey, cancel);
        });
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 使用响应拦截器
http.interceptors.response.use(response => {
    // 请求成功后，从pendingRequests中移除请求
    const requestKey = `${response.config.url}&${response.config.method}&${JSON.stringify(response.config.params)}&${JSON.stringify(response.config.data)}`;
    pendingRequests.delete(requestKey);
    return response;
}, error => {
    // 请求失败后，同样从pendingRequests中移除请求
    if (axios.isCancel(error)) {
        console.log('请求被取消:', error.message);
    } else {
        // 处理其他错误
    }
    return Promise.reject(error);
});
