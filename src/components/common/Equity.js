import { memo } from "react";
export default memo(({ lists }) => {
    return (
        <div className='owners_container_join'>
            <h6 className='ab_title'><i className='icon_about'></i>专属权益</h6>
            <ul className='luge_cards_list'>
                {
                    lists && lists.map(item =>
                        <li className='data_author_join'>
                            <a href={!item.pageUrl ? "javascript:;" : item.pageUrl} className='join_quan_yi_item'>
                                <span className='icon_quan_yi'>
                                    <img src={item.imgUrl} alt="" />
                                </span>
                                <span className='luge_word_join'
                                    dangerouslySetInnerHTML={{// bca-disable-line
                                        __html: item.title
                                    }}></span>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    );
});