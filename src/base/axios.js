import axios from 'axios';
const SUCCESS_CODE = 200;
// axios的一些全局配置
// 超时时间
axios.defaults.timeout = 15 * 60 * 1000;
// 请求携带cookie
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 'application/json;charset=UTF-8'; // 配置请求头// 表单形式提交数据
axios.defaults.baseURL = setUrl(); // 'http://szwg-rp-nlpgpu03.szwg01.baidu.com:8088' // 'https://nlp.baidu.com';
function setUrl() {
    if (window.location.origin.includes('127.0.0.1')) {
        return 'http://szwg-rp-nlpgpu03.szwg01.baidu.com:8088';
    } else if (window.location.origin.includes('szwg-rp-nlpgpu03.szwg01.baidu.com')) {
        return '';
    } else {
        return 'https://nlp.baidu.com';
    }
}
// http请求拦截器
// 添加时间戳 防止缓存
axios.interceptors.request.use(
    (config) => {
        if (config.method && config.method.toLowerCase() === 'get') {
            const url = config.url;
            const timestamp = new Date();
            config.url = `${url}${url.indexOf('?') === -1 ? '?' : '&'
                }timestamp=${timestamp}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    (res) => {
        let { message } = res.data;
        if (res.status !== 200) {
            if (message === '' || message === null) {
                message = '服务器错误';
            }
            return Promise.reject(new Error(message));
        }
        return res;
    },
    (error) => {
        if (error.message.includes('timeout')) {
            error.message = '请求超时，请重试！';
        }
        return Promise.reject(error); // 下面请求方法中catch内的语句会被执行
    }
);

// 返回一个Promise(发送post请求)
export function postRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(
                (res) => {
                    if (res.status === SUCCESS_CODE) {
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                },
                (err) => {
                    reject(err);
                }
            )
            .catch((error) => {
                reject(error);
            });
    });
}

// 返回一个Promise(发送get请求)
export function getRequest(url, params) {

    if (url.includes('platform') && window.location.origin.includes('http://localhost:3000')) {
        axios.defaults.baseURL = '';
    }
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params,
            })
            .then(
                (res) => {
                    if (res.status === SUCCESS_CODE) {
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                },
                (err) => {
                    reject(err);
                }
            )
            .catch((error) => {
                reject(error);
            });
    });
}

// 返回一个Promise(发送post请求)
export function uploadRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(
                (res) => {
                    if (res.status === SUCCESS_CODE) {
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                },
                (err) => {
                    reject(err);
                }
            )
            .catch((error) => {
                reject(error);
            });
    });
}


export const jsonP = ({ url, data, success, error }) => {
    let callbackName = `jsonpCallBack${random()}`;
    let head = document.head;
    data.callback = callbackName;
    data = formatParams(data);
    let script = document.createElement('script');
    head.appendChild(script);
    window[callbackName] = json => {
        clear();
        clearTimeout(script.timer);
        success && success(json);
    };
    script.src = `${url}?${data}`;
    script.timer = setTimeout(() => {
        clear();
        error && error();
    }, 10000);
    // 格式化参数
    function formatParams(data) {
        data = data || {};
        let arr = [];
        for (let name in data) {
            if (data.hasOwnProperty(name)) {
                if (name === 'requestUrl') {
                    arr.push(name + '=' + data[name]);
                } else {
                    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
                }
            }
        }
        // 添加一个随机数，防止缓存
        arr.push('_=' + random());
        return arr.join('&');
    }
    // 获取随机数
    function random() {
        return Math.floor(Math.random() * 10000 + 500);
    }
    function clear() {
        head.removeChild(script);
        delete window[callbackName];
    }
};