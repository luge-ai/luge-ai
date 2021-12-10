import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { WeirwoodErrorBoundary } from '@/components/common/weirwood';
import { ConfigProvider } from 'antd';
import { store } from './store';
import { setRem } from './utils/index';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
import App from './router/index';
import './styles/index.less';
moment.locale('zh-cn');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <WeirwoodErrorBoundary> */}
                <ConfigProvider locale={zhCN}>
                    <App />
                </ConfigProvider>
            {/* </WeirwoodErrorBoundary> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

setRem();
window.onresize = () => {
    setRem();
};
