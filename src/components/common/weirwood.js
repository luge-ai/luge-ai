
import { Component } from 'react';
import * as Weirwood from '@baidu/weirwood-sdk';

const options = {
    common: {
        buildid: '2021-11-09',
        token: '2d8750c2db634795bef3f96d6801ba43',
        ignoreUrls: [
            // 本地开发屏蔽错误发送 设置需要忽略的域名或路径，命中后，不会发送性能日志到后端
            'localhost',
            '127.0.0.1'
        ]
    },
    error: {
        collectWindowErrors: true, // 是否收集 onerror 事件，默认收集。
        collectUnhandledRejections: true // 是否收集 unhandledrejection 事件，默认收集。
    },
    perf: {
        // 性能数据PV日志会比较大，可以输入 sampleRate 进行采样，控制在 50 W左右
        sampleRate: 1, // 采样率，0~1，0表示全部忽略，1表示全部命中。采样率PV/项目PV，50w / 100w = 0.5
        spa: true, // 是否 SPA 项目，决定了是否将 onload 事件作为页面加载完成的时间戳
        history: true // 路由导航方式
        //  disable
    }
};

// init() 方法，通过 init() 方法进行脚本初始化，会生成默认的异常监控实例，这是推荐使用的方式
// Client 类，通过这个类，用户可以创建其他的异常监控实例，属于高级玩法，不推荐普通用户使用
const weirwood = Weirwood.init(options);
export class WeirwoodErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // 调用异常API，weirwood 为初始化后的实例对象，如果选项中 error 配置没有提供，那么 error 无法获取
        weirwood.error.captureException(error);
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-page">自定义的错误页面</div>;
        }
        return this.props.children;
    }
}
