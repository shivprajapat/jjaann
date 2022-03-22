import React from 'react'
import { IconMessage, IconStar, IconSingle_User, IconRightArrow } from '../../../images/icons'

export default function Easier() {
    const data = [
        {
            image: IconMessage,
            title: "메일 주소 등록"
        },
        {
            image: IconSingle_User,
            title: "프로필 사진 등록"
        },
        {
            image: IconStar,
            title: "관심사 설정"
        }
    ]

    return (
        <div className='easier'>
            <div className="easier_tab">
                <h2>친구들이 희재님을 쉽게 찾도록
                    프로필을 완성해주세요!</h2>
                <p className='pro'>프로필 완성도</p>
                <div class="progress">
                    <div class="skill"></div>
                    <div className="progress_txt">
                        <span>매우 낮음</span>
                        <span>12%</span>
                    </div>
                </div>
                <div className="easier_tab_items">
                    {
                        data.map((item, index) => {
                            const { image, title } = item;
                            return (
                                <div className="_item" key={index}>
                                    <div className="img_sec">
                                        <img src={image} alt="" />
                                        <p>{title}</p>
                                    </div>
                                    <div className="txt">
                                        <p>+24%</p><img src={IconRightArrow} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="easier_tab_footer">
                    <p>나중에 하기</p>
                </div>
            </div>
        </div>
    )
}
