import React, { memo, useRef } from 'react';
import { Modal, Checkbox, message } from 'antd';
import './index.less';

const BaiduRule = props => {
    const { visible, handleUserDetail, downUrl } = props;
    const checkStatus = useRef(null);
    const handleOk = () => {
        handleUserDetail(true);
    };
    const handleCancel = () => {
        handleUserDetail(false);
    };
    const onChange = event => {
        checkStatus.current = event.target.checked;
    };
    const handleLoad = () => {
        if (checkStatus.current) {
            window._hmt.push(['_trackEvent', '千言数据详情', '下载弹框-点击下载']);
            window.location.href = downUrl;
            return;
        }
        message.error('请勾选我已阅读并理解该声明前的复选框');
    };
    return (
        <Modal
            title=''
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={910}
            height={600}
            footer={[]}
            className='user_modal'
        >
            <div className='modal_container'>
                <h6 className='modal_title'>法律声明</h6>
                <div className='modal_content'>
                    <div className='modal_content_inner'>
                        <strong>数据集开源和使用协议</strong>
                        <br />
                        <span>一、在使用千言系列数据集（以下简称“本数据集”）前，请您务必仔细阅读并理解透彻本《数据开源和使用协议》（以下简称“本协议”）。</span>
                        <span>二、本数据集尚处于前沿探索阶段，仅供您学术、研究目的使用，未经许可，请勿用于商业用途。</span>
                        <span>三、使用本数据集请确保您的使用未侵害他人权益，同时禁止用于违反法律法规的用途。</span>
                        <span>四、本数据集不包含任何个人信息。数据集中所包含的所有内容，均不代表数据集提供方的立场。我方对数据集中的内容，例如语料、内容、文字等不享有任何知识产权，也不就上述内容做出任何保证。</span>
                        <span>五、在同意接受本协议之前，具体的使用规范请严格按照下方《数据集开源及使用协议》的内容。此外，无论是否实际阅读本协议，您实际使用百度（“数据集提供方”）提供的本数据集，均表示您已同意接受本协议的全部约定内容。如果您不同意本协议的任意内容，或者无法准确理解数据集提供方对本协议条款的解释，请不要同意或使用本数据集。否则，表示您已接受了以下所述的条款和条件，同意受本协议约束。</span>
                        <br />
                        <label>协议内容如下：</label>
                        <span>1. 您承诺，严格依照本协议使用本数据集，并且不会利用本数据集进行任何违法或不当的活动，不会进行任何含有下列内容之一的行为：</span>
                        <span className='span_small'>(1) 反对宪法所确定的基本原则的；</span>
                        <span className='span_small'>(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</span>
                        <span className='span_small'>(3) 损害国家荣誉和利益的；</span>
                        <span className='span_small'>(4) 煽动民族仇恨、民族歧视、破坏民族团结的；</span>
                        <span className='span_small'>(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；</span>
                        <span className='span_small'>(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</span>
                        <span className='span_small'>(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span>
                        <span className='span_small'>(8) 侮辱或者诽谤他人，侵害他人合法权利的；</span>
                        <span className='span_small'>(9) 含有虚假、诈骗、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容；</span>
                        <span className='span_small'>(10) 含有中国或其您所在国国家管辖法所适用的法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的。 您应当对使用本数据集是否符合法律法规规定进行必要审查，并由您承担由此产生的所有责任。您确认并同意，数据集提供方不会因为本数据集或您使用本数据集违反上述约定，而需要承担任何责任。</span>
                        <span>2. 您使用本数据集不得侵害他人权益（包括但不限于著作权、专利权、商标权等知识产权与其他权益）。</span>
                        <span>3. 您同意并承诺，在使用本数据集时，不会披露任何保密、敏感或个人信息。</span>
                        <span>4. 您同意并承诺，本数据集以及因使用本数据集所取得的任何产出或成果，仅限您本人用于学术、研究目的，未经数据集提供方事前书面同意，您不得将本数据集以及前述产出或成果用于任何商业或其他目的与用途。</span>
                        <span>5. 您应理解并同意，本数据集仅处于研究阶段，尚存在不完备性，数据集提供方不对任何数据集可用性、可靠性做出任何承诺。数据集提供方不对您使用本数据集或本数据集结果承担任何责任，且本数据集结果不代表数据集提供方立场。</span>
                        <span>6. 数据集提供方有权因为业务发展或法律法规的变动而随时对本数据集的内容和/或提供方式进行变动，或者暂停或终止本数据集。您同意数据集提供方将不对因上述情况导致的任何后果，向您或第三方承担任何责任。</span>
                        <span>7. 在任何情况下，数据集提供方均不就因本数据集所发生的任何直接性、间接性、后果性、惩戒性、偶然性、特殊性的损害（包括但不限于：您使用本数据集而遭受的利润损失），承担任何责任（即使您已事先被告知该等损害发生的可能性）。</span>
                        <span>8. 若您违反本协议任何约定，则数据集提供方有权随时单方面终止本协议，且数据集提供方无需承担任何责任。同时，数据集提供方有权根据实际损失向您请求赔偿。</span>
                        <span>9. 除双方另有约定外，本协议之解释与适用，以及与本协议有关的争议，均依照中华人民共和国法律予以处理（不包含冲突法），并由数据集提供方所在地有管辖权的人民法院管辖。</span>
                    </div>
                    <div className='modal_content_inner'>
                        <strong>数据集平台免责声明</strong>
                        <br />
                        <span>一、在使用千言系列数据集（以下简称“数据集”）前，请您务必仔细阅读并理解透彻本《免责声明》（以下简称“本声明”）, 您可以选择不使用本平台访问、下载数据集，但如果您使用本平台进行数据集下载行为，您的使用行为将被视为对本声明全部内容的认可。</span>
                        <span>二、本数据集由各数据集贡献方贡献，本平台仅提供贡献者上传所贡献数据集并由您自行下载的平台服务。本平台对贡献方贡献数据集的合法性概不负责，亦不承担任何法律责任。</span>
                        <span>三、您使用本平台下载的数据集前请仔细阅读数据集的使用协议或规则，如有任何问题请与数据集贡献方联系。</span>
                        <span>四、无论您是否实际阅读本声明，您访问、下载、实际使用本平台本数据集，均表示您已同意接受本声明的全部约定内容。如果您不同意本声明的任意内容，请不要同意或使用本数据集。否则，表示您已接受了本声明的条款和条件，同意受本声明约束。</span>
                        <span>五、任何单位或个人认为本平台上展示的数据集可能涉嫌侵犯其合法权益权，应该及时通知本平台，并提供身份证明、权属证明及详细侵权情况证明。我们在收到上述通知后，将会依法进行处理。请注意：如果通知的陈述失实，通知提交者将承担对由此造成的全部法律责任（包括但不限于赔偿各种费用及律师费）。如果上述个人或单位不确定网络上可获取的资料是否侵犯了其合法权益，本平台建议该个人或单位首先咨询专业人士。</span>
                        <span>通知方式：发送邮件至千言数据集官方邮箱<a href="mailto:luge_ai@126.com">luge_ai@126.com</a>。</span>
                    </div>
                </div>
                <div className='model_footer'>
                    <span className='model_agree'>
                        <Checkbox onChange={onChange} />
                        <span className='agree_item'>我已阅读并理解该声明</span>
                    </span>
                    <span className='model_load' onClick={handleLoad}>
                        下载
                    </span>
                </div>
            </div>
        </Modal>
    );
};

export default memo(BaiduRule);
