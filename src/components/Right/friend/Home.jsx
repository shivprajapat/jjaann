import React, { useState } from 'react'
import { IconSearch, IconUser, IconClose } from '../../../images/icons'
import userimg from '../../../images/image/user1.jpg';
import { FriendData, FriendData2 } from './FriendData'
export default function Home() {
    const [data, setdata] = useState(FriendData);
    const [data1, setdata1] = useState(FriendData2);

    return (
        <div className='friend'>
            <div className="friend_tab">
                <div class="search-box">
                    <button class="search-icon">
                        <img src={IconSearch} alt="" />
                    </button>
                    <input type="text" class="search-input" placeholder="검색." />
                    <button class="search-button">
                        <img src={IconUser} alt="" />
                    </button>
                </div>

                <div className="refer">
                    <div className="txt">
                        <h2>친구 추천</h2>
                        <span>더보기</span>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className="refer_list" key={index}>
                                    <div className="refer_list_item">
                                        <div className="refer_list_left">
                                            <img
                                                src={item.image} alt={item.title} />
                                            <div className="txt">
                                                <p>
                                                    <span className='frist'>{item.title} </span>
                                                    <span>{item.second_title}</span>
                                                </p>
                                                <h5>{item.desc}</h5>
                                            </div>
                                        </div>
                                        <div className="refer_list_right">
                                            <div className="refer_list_right">
                                                <button className='btn'>친구 요청</button>
                                                <img src={IconClose} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="refer friend-second-list">
                    <div className="txt">
                        <h2>친구 목록</h2>
                    </div>
                    {
                        data1.map((item, index) => {
                            return (
                                <div className="refer_list" key={index}>
                                    <div className="refer_list_item">
                                        <div className="refer_list_left">
                                            <img
                                                src={item.image} alt={item.title} />
                                            <div className="txt">
                                                <p>
                                                    <span className='frist'>{item.title} </span>
                                                    <span>{item.second_title}</span>
                                                </p>
                                                <h5>{item.desc}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
