import { memo } from 'react';
import { Modal } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';
import './index.less';

const UserDetail = props => {
    const {visible, handleUserDetail, usersRef} = props;
    const handleOk = () => {
        handleUserDetail(true);
    };
    const handleCancel = () => {
        handleUserDetail(false);
    };
    // const onChange = () => {};
    return (
        <Modal
            title=''
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={910}
            height={600}
            footer={[]}
            className='user_modal'>
            <div className='modal_user_content'>
                {usersRef.current &&
                    <>
                        <img src={usersRef.current.authorPic}  alt='图片' />
                        <div className='modal_user_right'>
                            <h6 className='modal_title'>{usersRef.current.authorName}</h6>
                            <p className='model_user_shot_desc'>{usersRef.current.title}</p>
                            <div className='model_user_long_desc'>{usersRef.current.authorDesc}</div>
                            <div className='model_more_content'>
                                <a
                                    className='model_more_intro'
                                    href={usersRef.current.url}
                                    rel="noopener noreferrer"
                                    target='_blank'>
                                    更多介绍<ArrowRightOutlined />
                                </a>
                            </div>
                        </div>
                    </>
                }
            </div>
      </Modal>
    );
};

export default memo(UserDetail);