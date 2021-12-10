
import React, { memo } from 'react';
import xm_bosuipeng from '../assets/uses/xm_bosuipeng.png';
import pa_chenjiahou from '../assets/uses/pa_chenjiahou.png';
import haerbing_chensichao from '../assets/uses/haerbing_chensichao.png';
import xm_daiwen from '../assets/uses/xm_daiwen.png';
import haerbing_huxinchuo from '../assets/uses/haerbing_huxinchuo.png';
import xm_huaxinyu from '../assets/uses/xm_huaxinyu.png';
import huadong_lidejian from '../assets/uses/huadong_lidejian.png';
import xb_lixuehui from '../assets/uses/xb_lixuehui.png';
import haerbing_liyunxin from '../assets/uses/haerbing_liyunxin.png';
import huazhong_lizheng from '../assets/uses/huazhong_lizheng.png';
import huaxiao_liaoyongxin from '../assets/uses/huaxiao_liaoyongxin.png';
import xianggang_lindongding from '../assets/uses/xianggang_lindongding.png';
import OPPO_linhaozhi from '../assets/uses/OPPO_linhaozhi.png';
import huadong_liushen from '../assets/uses/huadong_liushen.png';
import baidu_luhua from '../assets/uses/baidu_luhua.png';
import tx_luomingwen from '../assets/uses/tx_luomingwen.png';
import OPPO_tushiwen from '../assets/uses/OPPO_tushiwen.png';
import xianggang_wangjian from '../assets/uses/xianggang_wangjian.png';
import sibichi_wurenshou from '../assets/uses/sibichi_wurenshou.png';
import baidu_xuguojin from '../assets/uses/baidu_xuguojin.png';
import my_yingzhenzhe from '../assets/uses/my_yingzhenzhe.png';
import suzhoudaxue_zhangguoliang from '../assets/uses/suzhoudaxue_zhangguoliang.png';
import dongbei_zhanglonghui from '../assets/uses/dongbei_zhanglonghui.png';
import dongbei_zhangsibo from '../assets/uses/dongbei_zhangsibo.png';
import huadong_zhangtiantian from '../assets/uses/huadong_zhangtiantian.png';
import hanyiziku_zhangxiaoyu from '../assets/uses/hanyiziku_zhangxiaoyu.png';
import huadong_zhangyadong from '../assets/uses/huadong_zhangyadong.png';
import dongbei_zhaoxiaofeng from '../assets/uses/dongbei_zhaoxiaofeng.png';
import sibichi_liang from '../assets/uses/sibichi_liang.png';
import haerbing_zhaoyu from '../assets/uses/haerbing_zhaoyu.png';
import ai_zhusu from '../assets/uses/ai_zhusu.png';

const exprtLists = [
    {
        id: 3,
        img: xm_bosuipeng,
        name: '孛瑞朋',
        company: '小米AI Lab'
    },
    {
        id: 4,
        img: pa_chenjiahou,
        name: '陈家豪',
        company: '平安壹账通'
    },
    {
        id: 30,
        img: haerbing_chensichao,
        name: '陈思超',
        company: '哈尔滨工业大学（深圳）'
    },
    {
        id: 2,
        img: xm_daiwen,
        name: '代文',
        company: '小米AI Lab'
    },
    {
        id: 27,
        img: haerbing_huxinchuo,
        name: '胡欣硕',
        company: '哈尔滨工业大学（深圳）'
    },
    {
        id: 1,
        img: xm_huaxinyu,
        name: '花新宇',
        company: '小米AI Lab'
    },
    {
        id: 20,
        img: huadong_lidejian,
        name: '李德健',
        company: '华东师范大学'
    },
    {
        id: 36,
        img: 'https://fanyiapp.cdn.bcebos.com/cms/image/23b64c1bae545cb7145f99fb2f308c37.png',
        name: '李家诚',
        company: '网易'
    },
    {
        id: 6,
        img: xb_lixuehui,
        name: '李学辉',
        company: '小冰科技'
    },
    {
        id: 29,
        img: haerbing_liyunxin,
        name: '李云鑫',
        company: '哈尔滨工业大学（深圳）'
    },
    {
        id: 10,
        img: huazhong_lizheng,
        name: '李政',
        company: '华中科技大学'
    },
    {
        id: 31,
        img: huaxiao_liaoyongxin,
        name: '廖永新',
        company: '华侨大学'
    },
    {
        id: 17,
        img: xianggang_lindongding,
        name: '林东定',
        company: '香港理工大学'
    },
    {
        id: 13,
        img: OPPO_linhaozhi,
        name: '林浩智',
        company: 'OPPO'
    },
    {
        id: 23,
        img: huadong_liushen,
        name: '刘申',
        company: '华东师范大学'
    },
    {
        id: 11,
        img: baidu_luhua,
        name: '陆华',
        company: '百度'
    },
    {
        id: 7,
        img: tx_luomingwen,
        name: '罗锦文',
        company: '腾讯'
    },
    {
        id: 18,
        img: sibichi_liang,
        name: '缪庆亮',
        company: '思必驰'
    },
    {
        id: 12,
        img: OPPO_tushiwen,
        name: '涂世文',
        company: 'OPPO'
    },
    {
        id: 16,
        img: xianggang_wangjian,
        name: '王健',
        company: '香港理工大学'
    },
    {
        id: 19,
        img: sibichi_wurenshou,
        name: '吴仁守',
        company: '思必驰'
    },
    {
        id: 8,
        img: baidu_xuguojin,
        name: '徐国进',
        company: '百度'
    },
    {
        id: 5,
        img: my_yingzhenzhe,
        name: '应缜哲',
        company: '蚂蚁集团'
    },
    {
        id: 45,
        img: 'https://fanyiapp.cdn.bcebos.com/cms/image/8299c8328acc94ee6a46e94a07acbbd5.png',
        name: '袁威强',
        company: '网易'
    },
    {
        id: 15,
        img: suzhoudaxue_zhangguoliang,
        name: '张国梁',
        company: '苏州大学'
    },
    {
        id: 25,
        img: dongbei_zhanglonghui,
        name: '张龙辉',
        company: '东北大学'
    },
    {
        id: 24,
        img: dongbei_zhangsibo,
        name: '张斯博',
        company: '东北大学'
    },
    {
        id: 22,
        img: huadong_zhangtiantian,
        name: '张甜甜',
        company: '华东师范大学'
    },
    {
        id: 14,
        img: hanyiziku_zhangxiaoyu,
        name: '张啸宇',
        company: '汉仪字库'
    },
    {
        id: 21,
        img: huadong_zhangyadong,
        name: '张亚东',
        company: '华东师范大学'
    },
    {
        id: 26,
        img: dongbei_zhaoxiaofeng,
        name: '赵晓峰',
        company: '东北大学'
    },
    {
        id: 28,
        img: haerbing_zhaoyu,
        name: '赵宇',
        company: '哈尔滨工业大学（深圳）'
    },
    {
        id: 9,
        img: ai_zhusu,
        name: '朱苏',
        company: 'AI Speech'
    }
];

const Expert = () => {
    return (
        <div className='lugeDataAuthContainer'>
            <h6 className='ab_title'><i className='icon_about'></i>千言技术专家</h6>
            <div className='luge_expert_list'>
                {
                    exprtLists.map(item => (
                        <div
                            className='expert_item'
                            key={item.id}>
                            <img src={item.img}  alt='图片'/>
                            <div className='expert_right'>
                                <strong>{item.name}</strong>
                                <span>{item.company}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default memo(Expert);